# Test Cases — ConectaTech

[English](test-cases.md) | [Português](casos-de-teste.md)

## Scope

This document describes the main functional, responsive, and accessibility scenarios for the ConectaTech landing page.

## Acceptance Criteria

### Navigation

- Each menu item must take the user to the corresponding section.
- Scrolling between sections must be smooth.
- No internal link may point to a nonexistent section.

### Mobile Menu

- On screens up to 768 pixels wide, the menu must initially be hidden.
- The menu button must display three lines while closed.
- When the button is selected, the links must appear and the icon must change to an X.
- When a link is selected, the menu must close automatically.
- The button's accessible state must reflect whether the menu is open or closed.

### Responsiveness

- Services and workflow steps must be displayed in three columns on larger screens.
- On screens up to 768 pixels wide, cards must be arranged in one column.
- Text, buttons, and cards must not be clipped, overlap, or extend outside the viewport.

## Scenarios

| ID | Scenario | Precondition | Action | Expected Result | Status |
|---|---|---|---|---|---|
| CT-001 | Navigate to Services | Page loaded | Select “Serviços” | The “Nossos serviços” section is displayed | Passed |
| CT-002 | Navigate to About | Page loaded | Select “Sobre” | The corresponding section is displayed | Passed |
| CT-003 | Navigate to FAQ | Page loaded | Select “Dúvidas” | The FAQ section is displayed | Passed |
| CT-004 | Open mobile menu | Screen up to 768 px and menu closed | Select the menu button | Links appear and the icon changes to an X | Passed |
| CT-005 | Close menu with button | Mobile menu open | Select the menu button again | Links are hidden and the three lines return | Passed |
| CT-006 | Close menu through a link | Mobile menu open | Select any menu link | The section is displayed and the menu closes | Passed |
| CT-007 | Open FAQ item | FAQ section visible | Select a question | Its answer is displayed | Passed |
| CT-008 | Close FAQ item | Question open | Select the question again | Its answer is collapsed | Passed |
| CT-009 | Open WhatsApp | Page loaded | Select a contact button | The WhatsApp address opens in another tab or app | Passed¹ |
| CT-010 | Validate cards on desktop | Screen wider than 768 px | Open Services and How It Works | Each group is displayed in three columns | Passed |
| CT-011 | Validate cards on mobile | Screen up to 768 px | Open Services and How It Works | Cards are displayed in one column | Passed |
| CT-012 | Validate text on a small screen | Mobile screen | Browse the entire page | No clipped or overlapping text and no unintended horizontal scrolling | Passed |
| CT-013 | Validate accessible menu state | Screen reader or inspector open | Open and close the menu | `aria-expanded` and `aria-label` reflect the current state | Passed |
| CT-014 | Navigate using the keyboard | Page loaded | Use Tab and Enter | Links, menu button, and FAQ can be reached and activated | Pending |
| CT-015 | Open external link securely | Page loaded | Inspect the WhatsApp link | The link uses `noopener noreferrer` | Pending |

¹ The redirect passed, but the phone number is a placeholder and must be replaced before any commercial use.

## Execution Record

| Date | Tests | Type | Result | Environment |
|---|---|---|---|---|
| October 1, 2026 | CT-001 to CT-013 | Manual execution | 13 passed | Google Chrome on Samsung Galaxy S23 Ultra; Google Chrome and Brave on desktop |

## Execution Status Guide

- **Passed:** behavior matches the expected result;
- **Failed:** behavior differs from the expected result;
- **Blocked:** the test could not be completed;
- **Not applicable:** the scenario does not apply to the evaluated version.

For each failure, record the browser, device, evidence, and reproduction steps.
