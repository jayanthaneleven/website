"use client";
import Section1 from './Section-1';
import Section2 from './Section-2';
import Section3 from './Section-3';
import Section4 from './Section-4';
import Section5 from './Section-5';
import Section6 from './Section-6';
import Section7 from './Section-7';
import Section8 from './Section-8';
import Section9 from './Section-9';
import Section10 from './Section-10';
import Section11 from './Section-11';
import Footer from '../components/Footer';
import PageIntro from '../components/PageIntro';

export default function Home() {
  return (
    <>
      <PageIntro />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Footer />
    </>
  );
}
