"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importa las bibliotecas
var typed_js_1 = require("typed.js");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var split_type_1 = require("split-type");
// TypeScript
var typing = new typed_js_1.default(".text", {
    strings: ["", "Web Developer", "Full-Stack."],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
// GSAP
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach(function (element, i) {
    if (element instanceof HTMLElement) {
        var i_text = new split_type_1.default(element);
        gsap_1.gsap.to(i_text.chars, {
            y: 0,
            stagger: 0.08,
            duration: 0.3,
        });
    }
});