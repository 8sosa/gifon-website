
interface ResourceItem {
  id?: string;
  title: string;
  date?: string;
  description?: string;
  image?: string;
  link: string;
  type?: string; // For downloads (PDF/DOC)
  size?: string; // For downloads
  status?: string; // For webinars (Upcoming/Past)
}

interface ResourcesData {
  news: ResourceItem[];
  press: ResourceItem[];
  podcasts: ResourceItem[];
  webinars: ResourceItem[];
  gallery: ResourceItem[];
  downloads: ResourceItem[];
  publications: ResourceItem[];
}

const resourcesData: ResourcesData = {
    "news": [],
    "press": [],
    "podcasts": [],
    "webinars": [],
    "gallery": [
      {title: "video", link: "/media/WhatsApp Video 2025-09-26 at 11.00.50_27df64d8.mp4", type: "video", image: "/media/Screenshot 2025-12-05 at 18.46.47.png"},
      {title: "Water", link: "/media/video_2025-09-22_12-46-00.mp4", type: "video", image: "/media/Screenshot 2025-12-05 at 18.49.35.png"},
      {title: "Transportation", link: "/media/video_2025-09-22_12-46-18.mp4", type: "video", image: "/media/Screenshot 2025-12-05 at 18.50.01.png"},
    ],
    "downloads": [],
    "publications": [
      { title: "Eyes on Location – The Journal of GeoINSIGHT", id: "GeoINSIGHT", description: "Our flagship peer-reviewed journal featuring original research, policy analyses, and thought leadership on GEOINT and its applications.", link: "#" }
    ]
  };

  export default resourcesData;