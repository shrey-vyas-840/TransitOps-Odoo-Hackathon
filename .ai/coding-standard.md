# coding-standards.md

# TransitOps Engineering Coding Standards

Version: 1.0

This document defines the mandatory engineering standards for every AI agent contributing code to TransitOps.

All implementation must comply with these standards.

If any instruction conflicts with this document, stop and request clarification.

---

# Engineering Philosophy

Always optimize for:

• Readability
• Maintainability
• Reusability
• Scalability
• Type Safety
• Consistency
• Security
• Accessibility

Never optimize for writing fewer lines of code.

Readable code is preferred over clever code.

---

# General Rules

Always think before writing code.

Follow this workflow.

Understand Task

↓

Analyze Dependencies

↓

Plan Architecture

↓

Implement

↓

Review

↓

Refactor

↓

Verify

Never immediately generate code without understanding the problem.

---

# Single Responsibility Principle

Every file should have one clear responsibility.

Examples

A page renders a screen.

A hook manages state.

A service communicates with APIs.

A utility performs reusable logic.

A component renders UI.

Never mix responsibilities.

---

# Folder Structure

Use this structure.

src/

app/

components/

modules/

hooks/

services/

types/

utils/

constants/

assets/

styles/

Do not place unrelated files together.

Do not create unnecessary folders.

---

# Module Structure

Every feature module should follow:

modules/

feature/

components/

hooks/

pages/

services/

types/

utils/

mocks/

Avoid placing feature logic inside shared folders.

---

# React Standards

Use Functional Components only.

Never use Class Components.

Use TypeScript for every component.

Prefer named exports.

One component per file.

Keep components focused.

Prefer composition over inheritance.

---

# Component Standards

Components should be:

Reusable

Composable

Predictable

Stateless whenever possible

Avoid giant components.

If a component exceeds approximately 250–300 lines or has multiple unrelated responsibilities, consider splitting it into smaller components.

---

# Props

Always define interfaces.

Example

interface VehicleCardProps

Avoid optional props unless necessary.

Avoid boolean explosion.

Bad

<Card compact rounded bordered selected />

Better

<Card variant="compact" />

---

# State Management

Prefer local state.

Lift state only when required.

Avoid unnecessary global state.

Business data belongs in services.

UI state belongs in components.

Never duplicate state.

---

# Hooks

Custom hooks should begin with:

use

Example

useVehicles

usePagination

useSearch

Hooks should:

Contain reusable logic.

Never render JSX.

Never directly manipulate DOM.

Never contain presentation code.

---

# Services

Pages must never call APIs.

Always use:

Page

↓

Hook

↓

Service

↓

REST API

Services should:

Be stateless.

Contain API communication.

Transform server responses if necessary.

Return typed data.

Never manipulate UI.

---

# Mock Data

Mock data belongs inside:

services/mocks

or

modules/feature/mocks

Never place mock objects inside pages.

Never hardcode data inside components.

---

# TypeScript Standards

Strict mode.

Never use:

any

Prefer:

unknown

Generics

Interfaces

Utility types

Export shared types.

Avoid duplicated interfaces.

---

# Naming Conventions

Components

PascalCase

VehicleCard

DriverTable

Hooks

camelCase

useVehicles

useTrips

Services

camelCase

vehicleService

tripService

Types

PascalCase

Vehicle

Trip

Driver

Constants

UPPER_SNAKE_CASE

MAX_ROWS

DEFAULT_PAGE_SIZE

Files

kebab-case

vehicle-card.tsx

trip-table.tsx

driver-form.tsx

---

# Imports

Import order:

React

Third-party libraries

Shared modules

Feature modules

Relative imports

Avoid deep relative imports.

Prefer aliases where configured.

---

# Styling

Use Tailwind CSS.

Prefer utility classes.

Use shadcn/ui components whenever possible.

Avoid inline styles.

Avoid custom CSS unless absolutely necessary.

Never duplicate utility class combinations.

Extract reusable patterns into components.

---

# Forms

Use:

React Hook Form

+

Zod

All forms should:

Validate inputs.

Display inline errors.

Use typed schemas.

Never trust frontend validation alone.

Backend validation remains authoritative.

---

# Tables

Enterprise applications rely heavily on tables.

Tables should support:

Search

Sorting

Filtering

Pagination

Loading state

Empty state

Error state

Responsive behavior

Do not reinvent table behavior for every module.

---

# Error Handling

Never ignore errors.

Always handle:

Loading

Success

Failure

Empty state

Network errors

Unexpected errors

Display user-friendly messages.

Never expose stack traces.

---

# Logging

Do not leave console.log statements in production code.

Never log:

Passwords

Tokens

Secrets

Personal information

Use structured logging only when appropriate.

---

# Security

Never expose:

API keys

JWT secrets

Passwords

Private URLs

Database credentials

Never hardcode secrets.

Never store sensitive information in Local Storage.

Avoid XSS.

Never use:

dangerouslySetInnerHTML

unless content is sanitized.

Escape user-generated content.

Treat all external data as untrusted.

---

# Accessibility

Use semantic HTML.

Every form input requires:

Label

Helper text where needed

Keyboard support

Focus indicators

Use ARIA only when semantic HTML is insufficient.

Meet WCAG AA standards.

---

# Performance

Lazy-load pages.

Memoize only when necessary.

Avoid unnecessary re-renders.

Do not optimize prematurely.

Optimize for readability first.

---

# Responsive Design

Support:

Desktop

Tablet

Mobile

Never build desktop-only interfaces.

Test responsive layouts before completing tasks.

---

# Reusability

Before creating a component, ask:

Can an existing component be reused?

If yes:

Reuse it.

If not:

Create a configurable component.

Never duplicate functionality.

---

# Code Reviews

Every implementation must include a self-review.

Verify:

Readability

Type safety

Responsiveness

Accessibility

Component reuse

Folder placement

Naming

Performance

Security

Refactor if improvements are identified.

---

# Git Standards

Commit after every logical milestone.

Examples

feat: dashboard layout

feat: reusable table

feat: trip management UI

fix: mobile sidebar

fix: zod validation

refactor: extract search hook

Keep commits focused.

Avoid large mixed-purpose commits.

---

# Documentation

Complex logic should be documented.

Avoid obvious comments.

Bad

// increment count

count++

Good

Explain why a particular implementation or trade-off exists when it is not immediately obvious.

---

# AI Agent Rules

Before every task:

Understand the objective.

Review dependencies.

Follow project-context.md.

Follow design-system.md.

Plan implementation.

Implement.

Review.

Refactor.

Only then consider the task complete.

If architecture information is missing:

Stop.

Request clarification.

Never guess.

---

# Definition of Done

A task is complete only when:

✓ TypeScript passes.

✓ No duplicated code.

✓ Components are reusable.

✓ Responsive behavior verified.

✓ Accessibility reviewed.

✓ Security considerations checked.

✓ Folder structure respected.

✓ Self-review completed.

✓ Ready for backend integration.

Quality is more important than speed.

Every line of code should be written as though it will be maintained by another engineer six months from now.