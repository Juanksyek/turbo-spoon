// Importa las bibliotecas
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// TypeScript
const typing = new Typed(".text", {
  strings: ["", "Web Developer", "Full-Stack."],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((element, i) => {
  if (element instanceof HTMLElement) {
    const i_text = new SplitType(element);
    gsap.to(i_text.chars, {
      y: 0,
      stagger: 0.08,
      duration: 0.3,
    });
  }
});

