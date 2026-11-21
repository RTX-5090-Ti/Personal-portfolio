export const projects = [
  {
    slug: "movie-website",
    title: "Movie Website",
    subtitle: "Khám phá phim và quản lý danh sách yêu thích",
    description:
      "Website khám phá phim với tìm kiếm, bộ lọc, danh sách yêu thích và lịch sử xem. Có trang quản trị phim, người dùng và hỗ trợ tiếng Việt / tiếng Anh.",
    status: "Hoàn thành",
    liveDemo: "https://youtu.be/j1W1kolZDtY",
    github: "https://github.com/RTX-5090-Ti/Project-WedMovie",
    detailAvailable: true,
    role: "Frontend Developer",
    year: "2026",
    overview: "Movie Website là dự án thực hành xây dựng trải nghiệm khám phá phim bằng React: từ tìm kiếm, xem thông tin phim đến lưu danh sách yêu thích và lịch sử xem. Trang quản trị hỗ trợ quản lý phim và người dùng. JSON Server cung cấp REST API và lưu dữ liệu; đăng nhập và phân quyền được mô phỏng ở phía frontend trong phạm vi dự án học tập.",
    sectionDescriptions: {
      features: "Các luồng chính dành cho người xem và quản trị viên.",
      screenshots: "Ảnh chụp thực tế từ dự án. Bấm vào ảnh để xem kích thước lớn hơn.",
      challenges: "Cách tổ chức dữ liệu và xử lý những luồng có nhiều trạng thái.",
      learnings: "Những kỹ năng mình rèn luyện qua quá trình xây dựng website.",
    },
    features: [
      "Khám phá phim qua banner nổi bật, bộ sưu tập và danh sách Top 10; tìm kiếm, lọc theo thể loại, quốc gia và loại phim.",
      "Xem thông tin chi tiết của từng phim; truy cập danh sách phim qua URL có tham số để tải lại hoặc chia sẻ bộ lọc.",
      "Đăng ký, đăng nhập, truy cập với tư cách khách và quản lý thông tin tài khoản; phân biệt giao diện dành cho khách, người dùng và admin.",
      "Lưu phim yêu thích và lịch sử xem theo tài khoản thông qua API, giúp giữ dữ liệu khi đăng nhập lại.",
      "Trang quản trị hỗ trợ thêm, sửa, xóa phim và quản lý người dùng; cập nhật danh sách sau khi API xác nhận thành công.",
      "Chuyển đổi giao diện tiếng Việt / tiếng Anh bằng i18next; chia nhỏ các trang và tải theo route với React.lazy.",
    ],
    screenshots: [
      { src: "/images/projects/movie/trang-chu.jpg", label: "Trang chủ", description: "Banner phim nổi bật và điều hướng khám phá nội dung." },
      { src: "/images/projects/movie/card-mopvie.jpg", label: "Bộ sưu tập phim", description: "Các hàng phim đề xuất và danh sách Top 10." },
      { src: "/images/projects/movie/rending-movie.jpg", label: "Danh sách phim", description: "Giao diện thẻ poster và tên phim song ngữ." },
      { src: "/images/projects/movie/login-page.jpg", label: "Đăng nhập", description: "Giao diện đăng nhập, chọn ngôn ngữ và truy cập với tư cách khách." },
    ],
    challenges: [
      {
        title: "Đồng bộ danh sách phim giữa các trang",
        content: "Trang chủ, danh sách và trang quản trị cùng sử dụng kho dữ liệu phim chung trong phiên ứng dụng. Các thao tác thêm, sửa, xóa chỉ cập nhật dữ liệu dùng chung sau khi API xác nhận, giúp các màn hình phản ánh cùng một trạng thái.",
      },
      {
        title: "Lưu thư viện riêng cho từng tài khoản",
        content: "Tách tài khoản, phim yêu thích và lịch sử xem thành các tập dữ liệu trên JSON Server. localStorage chỉ giữ phiên đăng nhập; dữ liệu cũ trong trình duyệt được chuyển lên API khi đăng nhập, tránh ghi đè những bản ghi đã có.",
      },
      {
        title: "Giữ bộ lọc khi tải lại trang",
        content: "Các danh sách sử dụng query string cho loại phim, thể loại và quốc gia. Trạng thái lọc được xác định từ URL để người dùng có thể mở trực tiếp, tải lại hoặc chia sẻ cùng một danh sách.",
      },
    ],
    learnings: [
      "Tách trang, component và lớp xử lý API để code React dễ bảo trì hơn.",
      "Xây dựng luồng CRUD, xử lý lỗi và đồng bộ giao diện với dữ liệu trả về từ server.",
      "Sử dụng React Router cho điều hướng, route guard và tham số tìm kiếm trên URL.",
      "Tổ chức nội dung đa ngôn ngữ bằng i18next và tái sử dụng giao diện giữa các danh sách phim.",
      "Viết kiểm thử cho các dịch vụ dữ liệu bằng Node.js test runner và JSON Server với dữ liệu trong bộ nhớ.",
      "Phân biệt mô phỏng đăng nhập ở frontend với xác thực và phân quyền cần được thực thi tại backend khi triển khai thực tế.",
    ],
    techs: ["React", "Tailwind CSS", "React Router", "JSON Server", "i18next"],
    metrics: [
      { label: "Khám phá", value: "Tìm & lọc phim" },
      { label: "Thư viện cá nhân", value: "Yêu thích" },
      { label: "Đa ngôn ngữ", value: "VI / EN" },
    ],
  },
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
