# QA Report — ConectaTech

[English](qa-report.md) | [Português](relatorio-qa.md)

## 1. Overview

ConectaTech is a responsive landing page for a fictional technical support business. The QA analysis covers navigation flows, adaptation to different screen sizes, mobile menu accessibility, external links, and information clarity.

## 2. Approach

The project quality was evaluated through four questions:

1. Does the implemented behavior meet the page's purpose?
2. Can users complete the main actions?
3. Does the site remain usable across different screens and navigation methods?
4. Which risks should be addressed before commercial use?

## 3. Positive Findings

- Semantic HTML using `header`, `nav`, `main`, `section`, `article`, and `footer`;
- Organized heading hierarchy;
- Mobile menu updates `aria-expanded` and `aria-label`;
- External links use `noopener noreferrer`;
- FAQ uses native `details` and `summary` elements;
- Responsive layout built with Grid, Flexbox, and a media query;
- Dark overlay on the hero image improves text contrast;
- Mobile menu closes automatically after a link is selected.

## 4. Risks and Improvement Opportunities

| ID | Type | Priority | Observation | Recommendation |
|---|---|---:|---|---|
| QA-001 | Configuration | High | WhatsApp links use a placeholder phone number | Replace it with the business number before final publication |
| QA-002 | Accessibility | Medium | The menu cannot be closed with the Escape key | Add keyboard closing behavior |
| QA-003 | Usability | Low | The menu does not close when the user selects outside it | Consider adding this behavior |
| QA-004 | Accessibility | Medium | Keyboard focus could have a clearer visual indicator | Add `:focus-visible` styles |
| QA-005 | Performance | Medium | The hero image may affect loading time | Compress it and, if possible, provide WebP or AVIF versions |
| QA-006 | SEO | Low | The project has no favicon or social metadata | Add an icon and Open Graph metadata |
| QA-007 | Quality | Medium | There are no automated tests yet | Automate critical flows after requirements are stable |
| QA-008 | Compatibility | Medium | Cross-browser test evidence remains limited | Validate Edge, Firefox, and additional mobile browsers |
| QA-009 | Navigation | Low | The logo points to `#` instead of an identified home section | Add `id="inicio"` and link the logo to `#inicio` |

## 5. Defect, Improvement, and Risk

- **Defect:** the system does not behave according to a defined requirement.
- **Improvement:** the current behavior works but could provide a better experience.
- **Risk:** a condition that may cause failure, difficulty, or future impact.

This distinction prevents every suggestion from being reported as a bug and supports prioritization.

## 6. Sample Bug Report

### Title

Mobile menu remains open after selecting an option.

### Environment

- Device: include model;
- Operating system: include version;
- Browser: include name and version;
- URL: https://landing-assistencia.vercel.app/

### Steps to Reproduce

1. Open the page on a screen up to 768 pixels wide;
2. Select the menu button;
3. Select “Serviços”;
4. Observe the menu state.

### Expected Result

The page navigates to Services and the menu closes.

### Actual Result

Describe the observed behavior and attach a screenshot or recording.

## 7. QA Skills Demonstrated

- Requirements and behavior analysis;
- Acceptance criteria definition;
- Test case design;
- Functional, responsive, and accessibility testing;
- Risk identification and prioritization;
- Clear defect documentation;
- Communication between business needs and technical implementation;
- GitHub documentation and traceability.

## 8. Next Steps

1. Execute the pending test cases and record the results;
2. Add evidence from test executions;
3. Replace the placeholder WhatsApp number;
4. Implement priority accessibility improvements;
5. Create automated tests for the menu, FAQ, and navigation;
6. Run regression tests after each relevant change.

## Conclusion

The project meets its goal of demonstrating a simple and responsive landing page. The QA documentation turns it into a more complete case study by showing not only the interface, but also the ability to analyze requirements, test behavior, communicate risks, and plan improvements.
