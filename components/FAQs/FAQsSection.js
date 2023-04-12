import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";

export default function FAQsSection() {
    useEffect(() => {
        const accordionHeader = document.querySelectorAll(".accordion-header");
        accordionHeader.forEach((header) => {
            header.addEventListener("click", function () {
                const accordionContent = header.parentElement.querySelector(".accordion-content");
                let accordionMaxHeight = accordionContent.style.maxHeight;

                // Condition handling
                if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
                    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
                    header.parentElement.classList.add("bg-indigo-50");
                } else {
                    accordionContent.style.maxHeight = `0px`;
                    header.parentElement.classList.remove("bg-indigo-50");
                }
            });
        });
    }, []);

    return (
        <div className="bg-white flex flex-col justify-center items-center px-6 md:px-0 py-16 ">
            <div className="max-w-4xl mx-auto">
                <div class="transition hover:bg-indigo-50">
                    <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                        <FaPlus />
                        <h3>What is term?</h3>
                    </div>
                    <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                        <p class="leading-6 font-light pl-9 text-justify">
                            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
                            far daughter.
                        </p>
                    </div>
                </div>
                <div class="transition hover:bg-indigo-50">
                    <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                        <FaPlus />
                        <h3>What is term?</h3>
                    </div>
                    <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                        <p class="leading-6 font-light pl-9 text-justify">
                            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
                            far daughter.
                        </p>
                    </div>
                </div>
                <div class="transition hover:bg-indigo-50">
                    <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
                        <FaPlus />
                        <h3>What is term?</h3>
                    </div>
                    <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
                        <p class="leading-6 font-light pl-9 text-justify">
                            Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put
                            far daughter.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}