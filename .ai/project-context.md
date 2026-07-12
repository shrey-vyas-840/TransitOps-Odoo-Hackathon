# project-context.md

# TransitOps AI Engineering Framework

Version: 1.0

This document is the single source of truth for every AI agent working on the TransitOps project.

Every specialized AI agent MUST read and follow this document before performing any task.

No agent may contradict or override the rules defined here.

---

# Project Overview

Project Name

TransitOps

Tagline

Smart Transport Operations Platform

Project Type

Enterprise ERP Web Application

Target

Odoo Hiring Hackathon

---

# Vision

TransitOps is a modern enterprise transport operations platform designed to help organizations manage vehicles, drivers, trips, maintenance, operational expenses, and analytics through a unified ERP interface.

The objective is to build software that feels comparable to products like:

• Odoo ERP
• SAP Fiori
• Oracle Fusion Cloud
• Microsoft Dynamics 365
• Zoho ERP

The application should prioritize productivity, consistency, scalability, and maintainability over visual novelty.

---

# Primary Goals

The frontend should:

• Feel like enterprise software.

• Support high information density.

• Be easy to navigate.

• Reduce user clicks.

• Remain responsive.

• Use reusable UI components.

• Integrate cleanly with backend APIs.

• Never depend on backend implementation details.

---

# Non Goals

TransitOps is NOT:

• A marketing website

• A landing page

• A portfolio

• A SaaS homepage

• A Dribbble concept

• A glassmorphism showcase

• An animation experiment

Avoid startup aesthetics.

Avoid excessive decoration.

---

# Development Philosophy

Follow these principles.

1. Simplicity

Prefer simple solutions.

Avoid unnecessary abstractions.

2. Reusability

Components should be reused across modules.

3. Scalability

Architecture should support future modules.

4. Maintainability

Code should be understandable after six months.

5. Separation of Concerns

UI

↓

Hooks

↓

Services

↓

Backend

Each layer has one responsibility.

6. Enterprise UX

Optimize for daily usage by operations teams.

---

# Technology Stack

Frontend

React

TypeScript

Vite

Tailwind CSS

shadcn/ui

React Hook Form

Zod

Lucide React

Recharts

Backend

REST APIs

PostgreSQL

Backend implementation is outside the scope of frontend agents.

---

# Team Responsibilities

Frontend Engineer

Responsible for

• UI

• UX

• Components

• Routing

• Services

• State Management

• Responsive Design

Backend Engineer

Responsible for

• PostgreSQL

• APIs

• Business Rules

• Authentication

• Authorization

• Database

• Validation

Frontend agents must NEVER redesign backend systems.

---

# Application Modules

Authentication

Dashboard

Vehicle Registry

Driver Registry

Trip Management

Maintenance

Fuel Logs

Expense Logs

Analytics

Notifications

Settings

No additional modules should be invented without approval.

---

# Frontend Architecture

Pages

↓

Feature Hooks

↓

Services

↓

Mock Data

↓

REST API

Pages never communicate directly with APIs.

---

# Mock Data Strategy

Until backend APIs exist:

Services may return mock data.

Mock data must remain isolated.

Never place mock objects inside UI components.

---

# Design Philosophy

The UI should resemble enterprise ERP software.

Focus on:

Consistency

Clarity

Efficiency

Predictability

Readable typography

Tables

Forms

Filters

Dashboards

Avoid:

Huge cards

Marketing layouts

Hero banners

Glassmorphism

Neon colors

Unnecessary gradients

Oversized whitespace

---

# User Experience Principles

Users spend many hours using ERP software.

Optimize for:

Fast navigation

Minimal clicks

Keyboard accessibility

Clear hierarchy

Consistent layouts

Reusable interaction patterns

---

# Folder Structure

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

No monolithic folders.

---

# API Philosophy

Frontend should assume APIs exist.

Do not invent API contracts.

Do not hardcode responses.

Services should be replaceable.

---

# Security Principles

Frontend never stores secrets.

Never expose:

API Keys

JWT secrets

Passwords

Database credentials

Private endpoints

Use environment variables.

Never trust frontend validation.

Backend performs final validation.

Avoid XSS risks.

Never use dangerouslySetInnerHTML without sanitization.

---

# Accessibility Principles

Follow WCAG.

Support:

Keyboard navigation

Screen readers

Focus visibility

Color contrast

Semantic HTML

Accessible forms

---

# Performance Principles

Lazy load routes.

Keep components small.

Avoid unnecessary re-renders.

Split large modules.

Use memoization only when justified.

---

# Code Quality

Readable code.

Strict TypeScript.

No any.

Reusable hooks.

Reusable components.

Meaningful names.

Self-review before completion.

---

# Git Workflow

Commit after every logical milestone.

Example commits

feat: dashboard layout

feat: vehicle registry

feat: analytics module

fix: responsive sidebar

refactor: reusable table

Never accumulate large uncommitted changes.

---

# Hackathon Constraints

Time is limited.

Prioritize:

Working software

Professional UI

Reusable architecture

Avoid over-engineering.

Prefer shipping a polished MVP over implementing unnecessary complexity.

---

# Success Criteria

A successful frontend should:

Look like enterprise software.

Integrate with backend without refactoring.

Remain responsive.

Use reusable components.

Be maintainable.

Support future expansion.

Follow consistent UX patterns.

Pass accessibility review.

Avoid technical debt.

---

# AI Agent Rules

Every AI agent must:

Read this document first.

Respect project scope.

Respect backend ownership.

Follow coding standards.

Follow design system.

Never invent missing business logic.

If architectural information is missing, stop and request clarification before continuing.

This document is the foundation for every specialized AI agent in the TransitOps project.