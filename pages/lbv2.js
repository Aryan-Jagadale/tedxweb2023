import {
  map,
  preloadImages,
  getTranslationDistance,
  getDistance,
} from '@/components/LookBook/utils'
import { gsap } from 'gsap'

class Item {
  DOM = {
    el: null,
    image: null,
  }

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.image = this.DOM.el.querySelector('.grid__item-img')
  }
}

class SpreadGrid {
  DOM = {
    el: null,
    items: null,
  }
  expanded = -1
  previousExpanded = -1

  constructor(DOM_el) {
    this.DOM.el = DOM_el
    this.DOM.items = [...this.DOM.el.querySelectorAll('.grid__item')]
    this.items = []
    this.DOM.items.forEach((item) => this.items.push(new Item(item)))
    this.options = {}
    this.options.duration = Number(this.DOM.el.dataset.duration) || 0.8
    this.options.ease = this.DOM.el.dataset.ease || 'power4'
    this.options.scale = Number(this.DOM.el.dataset.scale) || 2
    this.options.skew = Number(this.DOM.el.dataset.skew) || 0
    this.options.maxRotation = Number(this.DOM.el.dataset.maxRotation) || 0
    this.options.spread = Number(this.DOM.el.dataset.spread) || 80
    this.options.maxDistance = Number(this.DOM.el.dataset.maxDistance) || 500

    this.initEvents()
  }

  initEvents() {
    for (const item of this.items) {
      item.DOM.el.addEventListener('click', () => this.expand(item))
    }
  }

  expand(item) {
    if (this.tl) {
      this.tl.kill()
    }
    const itemIdx = this.items.indexOf(item)
    this.previousExpanded =
      this.expanded !== -1 && this.expanded !== itemIdx ? this.expanded : -1
    this.expanded = this.expanded === itemIdx ? -1 : itemIdx
    this.tl = gsap
      .timeline({
        defaults: {
          duration: this.options.duration,
          ease: this.options.ease,
        },
      })
      .addLabel('start', 0)
      .addLabel('end', this.options.duration)
      .set(
        item.DOM.el,
        {
          zIndex: this.expanded === -1 ? 1 : 999,
        },
        this.expanded === -1 ? 'end' : 'start'
      )

    if (this.options.skew) {
      this.tl
        .to(
          item.DOM.el,
          {
            duration: this.options.duration * 0.4,
            ease: 'sine.in',
            scale: 1 + (this.options.scale - 1) / 2,
            skewX:
              this.expanded === -1 ? -1 * this.options.skew : this.options.skew,
            skewY:
              this.expanded === -1 ? -1 * this.options.skew : this.options.skew,
            x: 0,
            y: 0,
            rotation: 0,
          },
          'start'
        )
        .to(
          item.DOM.el,
          {
            duration: this.options.duration * 0.6,
            ease: 'power4',
            scale: this.expanded === -1 ? 1 : this.options.scale,
            skewX: 0,
            skewY: 0,
          },
          `start+=${this.options.duration * 0.4}`
        )
    } else {
      this.tl.to(
        item.DOM.el,
        {
          scale: this.expanded === -1 ? 1 : this.options.scale,
          x: 0,
          y: 0,
          rotation: 0,
        },
        'start'
      )
    }

    if (this.previousExpanded !== -1) {
      const prevItem = this.items[this.previousExpanded]
      const delay = 0
      this.tl
        .set(
          prevItem.DOM.el,
          {
            zIndex: 1,
            delay: delay,
          },
          'start'
        )
        .to(
          prevItem.DOM.el,
          {
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            delay: delay,
          },
          'start'
        )
    }

    const filteredArray = this.items.filter((otherItem) => otherItem != item)

    for (let otherItem of filteredArray) {
      const { x, y } =
        this.expanded === -1
          ? { x: 0, y: 0 }
          : getTranslationDistance(
              otherItem.DOM.el,
              item.DOM.el,
              this.options.spread,
              this.options.maxDistance
            )
      const delay = 0
      const zIndex = Math.round(
        map(getDistance(otherItem.DOM.el, item.DOM.el), 0, 100000, 998, 1)
      )

      const rotationInterval = this.options.maxRotation
        ? Math.max(
            Math.round(
              map(
                getDistance(otherItem.DOM.el, item.DOM.el),
                0,
                500,
                this.options.maxRotation,
                0
              )
            ),
            0
          )
        : 0

      this.tl
        .set(
          otherItem.DOM.el,
          {
            zIndex: this.expanded === -1 ? 1 : zIndex,
            delay: delay,
          },
          this.expanded === -1 ? 'end' : 'start'
        )
        .to(
          otherItem.DOM.el,
          {
            x: x,
            y: y,
            rotation:
              this.expanded === -1
                ? 0
                : gsap.utils.random(rotationInterval * -1, rotationInterval),
            delay: delay,
          },
          'start'
        )
    }
  }
}

export default function Lookbook() {
  if (process.browser) {
    ;[...document.querySelectorAll('.grid')].forEach(
      (grid) => new SpreadGrid(grid)
    )
  }

  return (
    <div
      className="overflow-hidden bg-repeat-y bg-cover bg-black"
      style={{ backgroundImage: `url(/bg.png)` }}
    >
      <div
        className="grid gap-4 grid-cols-3 w-11/12 py-16 mx-auto pointer-events-none md:grid-cols-5 lg:grid-cols-8"
        data-duration="1"
        data-ease="elastic.out(0.2)"
        data-scale="2.2"
        data-max-rotation="40"
        data-spread="150"
        data-max-distance="2500"
      >
        {/* <div className='pb-4 relative h-full pointer-events-auto will-change-transform col-span-3 md:col-span-5 lg:col-span-8 text-4xl heading flex items-center justify-center text-white '>
                    LookBook
                </div> */}
        <div className="pb-4 relative h-full pointer-events-auto will-change-transform col-span-3 md:col-span-5 lg:col-span-8 text-5xl heading flex items-center justify-center text-white ">
          Want to witness us in our element? Here's a sneak peak into what
          TEDxVITPune actually has to offer.
        </div>
        {/* <div className="m-0 relative h-full pointer-events-auto will-change-transform col-span-2 text-7xl heading flex justify-center items-center text-gray-300">
                    2021
                </div> */}
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/2021/${i}.png)` }}
            ></div>
          </div>
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/2019/${i}.png)` }}
            ></div>
          </div>
        ))}

        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/2018Live/${i}.png)` }}
            ></div>
          </div>
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/2018/${i}.png)` }}
            ></div>
          </div>
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/2017/${i}.png)` }}
            ></div>
          </div>
        ))}
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className="grid__item relative m-0 pointer-events-auto will-change-transform">
            <div
              className="grid__item-img w-full aspect-[206/139] bg-cover cursor-pointer"
              style={{ backgroundImage: `url(lookbook/2016/${i}.png)` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
