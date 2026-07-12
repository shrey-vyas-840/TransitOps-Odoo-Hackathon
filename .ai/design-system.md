# design-system.md

# TransitOps Enterprise Design System

Version: 1.0

This document defines the official design language for TransitOps.

Every AI agent must follow this document.

No component, screen, or layout may violate these standards without explicit approval.

---

# Design Philosophy

TransitOps is an Enterprise Resource Planning (ERP) application.

The interface should prioritize:

• Productivity
• Clarity
• Consistency
• Predictability
• Accessibility
• Maintainability

The interface should resemble professional enterprise software rather than a marketing website.

Users are expected to spend multiple hours using this application daily.

Design every screen to reduce cognitive load.

---

# Design Inspiration

Reference products:

• Odoo 18
• SAP Fiori
• Microsoft Dynamics 365
• Oracle Fusion Cloud
• Atlassian Jira
• GitHub
• Linear

Avoid inspiration from:

• Startup landing pages
• Dribbble concepts
• Marketing websites
• NFT dashboards
• Crypto dashboards
• Glassmorphism templates

---

# Visual Principles

Hierarchy over decoration.

Whitespace with purpose.

Readable typography.

Consistent spacing.

Minimal colors.

Data-first layouts.

Reusable patterns.

Function over aesthetics.

---

# Design Tokens

All colors, spacing, typography, and sizing must use reusable design tokens.

Never hardcode visual values.

---

# Color Palette

## Primary

Purpose:

Primary actions

Navigation

Links

Selection

Recommended

Blue 600

Hover

Blue 700

Light

Blue 50

---

## Neutral

Background

Gray 50

Surface

White

Secondary Surface

Gray 100

Border

Gray 200

Muted Text

Gray 500

Primary Text

Gray 900

---

## Semantic Colors

Success

Green

Warning

Amber

Danger

Red

Info

Sky

Never use semantic colors as branding colors.

Reserve them only for status communication.

---

# Typography

Font Family

Inter

Fallback

System UI

Never mix multiple font families.

---

## Typography Scale

Display

36px

Page Title

30px

Section Title

24px

Card Title

18px

Body Large

16px

Body

14px

Caption

12px

Button

14px Medium

Use font weight to create hierarchy instead of changing colors.

---

# Spacing System

Follow an 8-point grid.

Allowed spacing values

4

8

12

16

20

24

32

40

48

64

80

Avoid arbitrary spacing.

---

# Border Radius

Small

6px

Medium

8px

Large

12px

Extra Large

16px

Do not exceed 16px.

Enterprise interfaces should avoid overly rounded elements.

---

# Shadows

Use subtle elevation.

Levels

None

Small

Medium

Large

Avoid dramatic shadows.

---

# Icons

Library

Lucide React

Rules

Use one icon style only.

Do not mix icon libraries.

Icons support labels.

Icons never replace text.

Navigation icons should remain consistent across modules.

---

# Layout Grid

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

Content should align to grid.

---

# Breakpoints

Mobile

<640px

Tablet

640–1024px

Desktop

>1024px

Large Desktop

>1440px

Layouts should gracefully adapt.

---

# Application Shell

Every authenticated page uses:

Header

↓

Sidebar

↓

Breadcrumb

↓

Page Header

↓

Toolbar

↓

Content

↓

Footer (optional)

Do not invent different layouts for each module.

---

# Navigation

Desktop

Persistent Sidebar

Tablet

Collapsible Sidebar

Mobile

Drawer Navigation

Navigation hierarchy must remain consistent.

---

# Sidebar

Contains

Logo

Navigation

Module Groups

User Profile

Collapse Button

Avoid unnecessary decorative elements.

---

# Header

Contains

Breadcrumb

Global Search Placeholder

Notifications

User Avatar

Settings Shortcut

Keep height consistent across all pages.

---

# Cards

Use cards to group related information.

Cards should include:

Title

Optional Description

Content

Optional Actions

Avoid nesting cards inside cards.

---

# KPI Cards

Purpose

Display summary metrics.

Should contain

Metric

Label

Optional Trend

Optional Icon

Keep layout consistent.

---

# Tables

Tables are first-class ERP components.

Every registry module should support:

Search

Sorting

Filtering

Pagination

Bulk Selection

Status Badges

Loading

Empty State

Error State

Do not replace tables with cards on desktop.

---

# Forms

Forms should:

Use labels above inputs.

Group related fields.

Show validation inline.

Display required fields clearly.

Support keyboard navigation.

Use consistent spacing.

Avoid horizontal scrolling.

---

# Buttons

Variants

Primary

Secondary

Outline

Ghost

Destructive

Loading

Sizes

Small

Medium

Large

Use Primary sparingly.

Avoid multiple primary buttons in the same section.

---

# Inputs

Every input should support:

Label

Placeholder

Helper Text

Validation Message

Disabled State

Error State

Never rely on placeholders as labels.

---

# Status Badges

Status should use semantic colors.

Examples

Active

Inactive

Pending

Completed

Cancelled

Overdue

Avoid custom status colors.

---

# Dialogs

Dialogs should:

Focus trap

Close on Escape

Prevent accidental dismissal where necessary

Display primary action clearly

Keep content concise

---

# Notifications

Support:

Success

Info

Warning

Error

Use toast notifications for temporary feedback.

Use alerts for persistent information.

---

# Empty States

Every page must include meaningful empty states.

Include

Illustration (optional)

Message

Primary Action

Never show blank screens.

---

# Loading States

Prefer Skeleton UI.

Avoid layout shifts.

Do not display spinners for long lists if skeletons are appropriate.

---

# Error States

Display

Problem summary

Suggested action

Retry option

Never expose technical details.

---

# Charts

Library

Recharts

Guidelines

Simple color palette

Readable labels

Consistent legends

Avoid 3D charts.

Avoid unnecessary animations.

Use charts only when they communicate useful information.

---

# Responsive Behavior

Desktop

Data-dense layout

Tablet

Reduced spacing

Collapsible sidebar

Mobile

Single-column layout

Prioritize usability over maintaining identical layouts.

---

# Motion

Animation should support usability.

Duration

150–250ms

Use motion for:

Hover

Dialogs

Drawers

Dropdowns

Avoid decorative animations.

---

# Dark Mode

Support both Light and Dark themes.

Never hardcode colors.

Use semantic design tokens.

Ensure WCAG AA contrast in both themes.

---

# Accessibility

Every component must support:

Keyboard navigation

Visible focus

Screen readers

Proper labels

ARIA where necessary

Touch-friendly interactions

Never sacrifice accessibility for aesthetics.

---

# Component Reuse

Before creating a new component ask:

Can an existing component solve this?

If yes

Reuse it.

If no

Create a configurable component.

Avoid duplicate UI.

---

# Figma Standards

Use:

Auto Layout

Variables

Components

Variants

Component Properties

Responsive Constraints

Dev Mode

Layer Naming

Frame Naming

Prepare every design for direct React implementation.

---

# Implementation Awareness

Designs should map cleanly to:

React Components

Tailwind CSS

shadcn/ui

Lucide Icons

Recharts

Avoid layouts that require excessive custom CSS.

---

# AI Agent Rules

Every design decision should answer:

Does this improve productivity?

Does it increase consistency?

Can another module reuse it?

Will developers implement it easily?

Does it support accessibility?

If the answer is no,

redesign before implementation.

---

# Definition of Good Design

A screen is considered complete when:

✓ Clear hierarchy

✓ Consistent spacing

✓ Accessible

✓ Responsive

✓ Reusable

✓ Enterprise appearance

✓ Easy to implement

✓ Compatible with React

✓ Compatible with Tailwind

✓ Compatible with shadcn/ui

Great enterprise design is almost invisible.

Users should focus on completing work—not on the interface itself.