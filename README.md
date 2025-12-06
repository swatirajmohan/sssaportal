# SSSA Platform - School Registration Module

A minimalistic, intuitive school registration system built with React, TypeScript, and Tailwind CSS following Jonathan Ive's design principles.

## ✨ Features

### School Registration 5-Step Wizard

1. **UDISE Code Entry** - Simple, focused 12-digit code input
2. **School Details** - Auto-populated information with edit capability
3. **Personnel Management** - Add teachers and staff with an intuitive card interface
4. **Student Enrollment** - Grade-wise student count tracking (Grades 6-12)
5. **Guardian Contacts** - Optional file upload or skip for later

## 🎨 Design Philosophy

- **Minimalistic** - One clear action per screen
- **Intuitive** - Large touch targets, clear navigation
- **Patient** - No hidden menus, everything visible
- **Forgiving** - Easy to go back and edit

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd sssa-platform
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
sssa-platform/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   └── Card.tsx
│   │   ├── school/          # School registration components
│   │   │   ├── ProgressIndicator.tsx
│   │   │   ├── Step1UdiseCode.tsx
│   │   │   ├── Step2SchoolDetails.tsx
│   │   │   ├── Step3Personnel.tsx
│   │   │   ├── Step4Students.tsx
│   │   │   ├── Step5Guardians.tsx
│   │   │   ├── PersonnelModal.tsx
│   │   │   └── CompletionScreen.tsx
│   │   └── layout/
│   │       └── Header.tsx
│   ├── pages/
│   │   └── SchoolOnboarding.tsx
│   ├── types/
│   │   └── school.types.ts
│   ├── lib/
│   │   └── utils.ts
│   └── App.tsx
```

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🎯 Key Design Decisions

### For Government Officials

- **Large touch targets** (48px minimum) - Easy clicking even with poor motor control
- **Clear progress indicators** - Always know where you are in the process
- **No hidden features** - Everything visible, nothing buried in menus
- **Instant feedback** - Clear visual responses to every action
- **Simple language** - Minimal text, maximum clarity

### Mobile & Desktop Ready

- Responsive design works on both desktop (primary) and mobile devices
- Single-column layout on mobile
- Large, touch-friendly buttons
- No complex gestures required

## 📝 Usage Example

```typescript
// Mock UDISE lookup (to be replaced with real API)
const getMockSchoolData = (udiseCode: string) => {
  return {
    udiseCode,
    name: 'Rajkiya Balika Inter College',
    district: 'lucknow',
    block: 'malihabad',
    schoolType: 'Government',
    // ... more fields
  };
};
```

## 🔜 Next Steps

- Add backend integration for UDISE data
- Implement data persistence
- Add validation feedback
- Create dashboard view
- Build self-assessment module

## 📄 License

This project is part of the Uttar Pradesh SSSA Platform initiative.
