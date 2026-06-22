export const projects = [
  {
    slug: "travel-social-network",
    title: "Travel Social Network",
    subtitle: "A social platform for sharing travel journeys",
    description:
      "A full-stack travel social network where users can share journeys, create milestones, upload media, react, comment, follow other travelers and customize their profiles.",
    role: "Full-stack Developer",
    year: "2026",
    status: "In development",
    liveDemo: "#",
    github: "https://github.com/RTX-5090-Ti",
    techs: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    metrics: [
      { label: "Core modules", value: "8+" },
      { label: "Main screens", value: "12+" },
      { label: "Media upload", value: "Image / Video" },
    ],
    features: [
      "Authentication with access token and refresh token flow",
      "Create travel journeys with multiple milestones",
      "Upload images and videos through Cloudinary",
      "Like, comment, follow and view user profiles",
      "Pinned journey, privacy options and soft delete flow",
      "Responsive feed layout with modern UI components",
    ],
    challenges: [
      {
        title: "Managing media upload for each milestone",
        content:
          "The difficult part was keeping each milestone's image and video preview independent. I separated preview, remove file and submit logic to make the flow easier to maintain.",
      },
      {
        title: "Building a realistic social feed",
        content:
          "The feed needed to support journey cards, owner information, reactions, comments, privacy and profile navigation. I split the UI into reusable components to reduce complexity.",
      },
      {
        title: "Handling authentication smoothly",
        content:
          "I used JWT with refresh token logic and Axios interceptors so expired access tokens can be refreshed without forcing the user to log in again immediately.",
      },
    ],
    learnings: [
      "Designing MongoDB schemas for real product-like features",
      "Splitting large React pages into reusable components",
      "Handling authenticated API requests with Axios",
      "Improving UI consistency with Tailwind CSS",
    ],
    screenshots: [
      "Feed Page",
      "Share Journey Modal",
      "Profile Page",
      "Journey Detail",
    ],
  },
  {
    slug: "real-time-chat-app",
    title: "Real-time Chat App",
    subtitle: "A MERN chat app with Socket.io",
    description:
      "A real-time chat application supporting one-to-one conversations, group chat, typing indicators, message loading and system notifications.",
    role: "Full-stack Developer",
    year: "2025",
    status: "Completed",
    liveDemo: "#",
    github: "https://github.com/quocvuong99er",
    techs: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    metrics: [
      { label: "Chat modes", value: "1-1 / Group" },
      { label: "Realtime", value: "Socket.io" },
      { label: "Messages", value: "Infinite scroll" },
    ],
    features: [
      "One-to-one realtime chat",
      "Group chat creation and member management",
      "Typing indicator with Socket.io",
      "Infinite scroll for older messages",
      "System messages for group actions",
      "Authentication and protected routes",
    ],
    challenges: [
      {
        title: "Loading old messages without breaking scroll position",
        content:
          "The message list needed to load older messages when scrolling upward. I learned how to control scroll behavior and keep the chat experience smooth.",
      },
      {
        title: "Managing realtime typing state",
        content:
          "Typing indicators can become inaccurate if events are not cleaned up correctly. I handled typing start and stop events with timers and socket listeners.",
      },
    ],
    learnings: [
      "Using Socket.io for realtime features",
      "Designing chat conversation data structure",
      "Handling protected chat routes",
      "Improving UX for message-heavy screens",
    ],
    screenshots: ["Inbox", "Chat Window", "Group Chat", "Typing Indicator"],
  },
];
