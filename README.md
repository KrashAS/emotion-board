# 🧠 Emotion Board

**Emotion Board** is a simple, responsive, and interactive emotion tracking app built with **Next.js** and **MobX**. It allows users to log their emotions, leave short comments, and organize them through drag-and-drop. All data is stored locally in the browser.

## 🚀 Features

### ✅ Core Functionality

- **Add Emotion**  
  - Click the **"Add Emotion"** button to open a modal
  - Choose from a predefined set of emotions (Joy, Sadness, Anger, Surprise, Calm, etc.)
  - Add a short comment
  - Confirm to add a new emotion card to the board

- **Delete Emotion**  
  - On **desktop**: via the "Delete" button on each card  
  - On **mobile**: swipe left to remove a card with animation

- **Display**  
  - Each emotion is shown as a **card** with an icon, color background, name, and comment  
  - On **desktop**: displayed in a grid layout  
  - On **mobile**: displayed in a vertical list with **drag-and-drop** support

- **Persistence**  
  - All emotions are saved to **Local Storage**
  - Data is automatically restored when the page reloads

---

### 🧰 Technical Requirements

- **Language**: TypeScript
- **State management**: MobX
- **Framework**: Next.js
- **UI**: Tailwind CSS
- **Fully responsive**: works on both desktop and mobile

---

### 🎁 Additional Features

- ✅ Smooth **animations** when adding new emotions
- ✅ **"Clear All"** button to remove all emotions at once
- ✅ **Daytime-based theming**: background color changes depending on morning, day, or night

