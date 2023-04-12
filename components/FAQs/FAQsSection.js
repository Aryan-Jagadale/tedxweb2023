import QnA from "./QnA";

export default function FAQsSection() {
    

    return (
        <div className="bg-white flex flex-col justify-center items-center px-6 md:px-0 py-16 ">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-center mb-8">About TEDxVITPune</h2>
                <QnA id="q1" question="What is TEDxVITPune?" answer="TEDxVITPune is an event where live talks with unique ideas and performances are shared with the community to educate and engage them." />
                <QnA id="q2" question="How can I reach out to the organising team of TEDxVITPune?" answer="You can reach out to us through our Social Media handles. Check out our Contact page to know more about our endeavours and reach out to the organising team." />
                <QnA id="q3" question="Where can I see previous TEDxVITPune talks?" answer="You can find talks from our previous speakers on the TEDx YouTube Channel." />
                <QnA id="q4" question="Is TEDxVITPune a part of TED?" answer="No, it is an independently organised TEDx event licensed by TED." />
                <h2 className="text-4xl font-black text-center my-8">Event specific queries</h2>
                <QnA id="q5" question="What is the nature of the event?" answer="TEDxVITPune 2022 will be held in an offline mode. Other event-specific details will be shared with the attendees a week before the event." />
                <QnA id="q6" question="Is there a limit to the number of attendees?" answer="Yes, according to the guidelines set by TED, TEDxVITPune has a limit of 100 attendees." />
                <QnA id="q7" question="Is TEDxVITPune a paid event?" answer="Yes. We, here at TEDx, believe in a holistic experience that lasts a lifetime. From workshops to event merchandise, we promise to put forth an invaluable experience for all the attendees." />
                <QnA id="q8" question="What all is included in the ticket for TEDxVITPune?" answer="The event ticket includes access to all speaker talks and performances, networking activities, workshops, speaker interaction, and specially curated merchandise for all the attendees." />
                <QnA id="q9" question="What is the itinerary for the event?" answer="TEDxVITPune is a one-day event, the itinerary for which will be intimated to the attendees via email before the event." />
                <QnA id="q10" question="Is the ticket refundable or transferable?" answer="The ticket to TEDxVITPune is non-transferable and non-refundable." />
                <QnA id="q11" question="What is the duration of the event?" answer="TEDxVITPune is a one-day event. The timings and itinerary will be notified to the selected attendees prior to the event." />
                <QnA id="q12" question="Who can attend the offline event?" answer="Anyone interested can register by filling out an Attendee Application Form. However, only top 100 forms will be selected for further attending the event." />
                <QnA id="q13" question="Are there any experience activities included along with the talks?" answer="Yes! We have a host of experience activities planned for our attendees." />
                <QnA id="q14" question="Can I pick experience sessions to attend?" answer="The ticket includes entry to not just one but all the experience sessions. The attendee is free to take benefit of all the networking activities and workshops." />
            </div>
        </div>
    )
}