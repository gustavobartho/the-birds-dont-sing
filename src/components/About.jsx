import React from 'react';
import './About.css';
import PromptWindow from './PromptWindow';

function About() {
    const promptText = "Write a 'About Us' page text for a company website focused on selling terrible experiences to their beloved customers. Amongst their most popular products is the Midnight Robbery, when they steal a person's cellphone and wallet around midnight in the dark alleys and streets around town, the Face Kick Cake, a cake designed to kick a person's face when they blow the candles and, the top selling product, the Butterfly Belly Punch that consists of an adult muscular male dressed as beautiful butterfly that punches the clients in the belly when they are not expecting it. It is a fictional company with fictional products and the text has a comic sense to it."
    const text = (
        <>
            Welcome to Terrible Experiences Inc., where we specialize in delivering the most delightfully dreadful adventures for our cherished customers. Prepare yourself for a journey into the realm of unforgettable misfortune and hilariously unfortunate incidents.
            About Us:
            At Terrible Experiences Inc., we take pride in crafting the most unique and outlandish encounters that will leave you gasping for breath, both from laughter and the sheer absurdity of it all. Our team of mischief-makers and creative geniuses work tirelessly to ensure that your experience with us is nothing short of extraordinary.
            Midnight Robbery:
            Amongst our most popular offerings is the thrilling Midnight Robbery experience. Picture this: it's midnight, the moon is hiding behind the clouds, and you find yourself wandering the dark alleys and streets of our town. Suddenly, our skilled thieves, armed with mischievous grins, stealthily swoop in and make away with your cellphone and wallet. It's an adrenaline-pumping adventure that will leave you both thrilled and relieved when you realize it was all part of the show.
            Face Kick Cake:
            If you're looking for a truly face-slapping surprise, our Face Kick Cake is an absolute must-try. Picture yourself surrounded by loved ones, ready to blow out the candles on a seemingly innocent cake. But wait! As you make your wish and lean in for a blow, the cake springs to life, delivering an unexpected kick to your face. It's the ultimate blend of celebration and amusement that will have you laughing (and icing your face) for days.
            Butterfly Belly Punch:
            Our top-selling product, the Butterfly Belly Punch, takes whimsical mayhem to new heights. Imagine encountering a stunningly beautiful butterfly fluttering its delicate wings before your very eyes. But beware, for this graceful creature conceals a secret. When you least expect it, the butterfly transforms into an adult male, dressed in all its colorful glory, and delivers a playful yet surprising punch to your belly. It's a punch you'll never see coming, and one that will surely leave you doubled over with laughter.
            Here at Terrible Experiences Inc., we believe that life is too short to take everything seriously. Our goal is to inject a dose of laughter and lightheartedness into your days, leaving you with memories that will be shared and cherished for years to come.
            So, if you're ready to embrace the hilariously absurd, join us on an adventure that will redefine your notion of fun. Expect the unexpected, prepare for the unconventional, and get ready to laugh until your belly aches - quite possibly from a certain butterfly punch.
            We can't wait to share unforgettable moments of comedic calamity with you at Terrible Experiences Inc. Embrace the absurdity, and let the laughter begin!"
        </>
    );

    return (
        <section>
            <PromptWindow promptText={promptText} />
        </section>
    );
}

export default About;