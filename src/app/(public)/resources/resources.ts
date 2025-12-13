
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
      // Dated Files
      // { "title": "Jan 01, 2012 (1)", "image": "/media/resources/20120101_010521.JPG", "link": "#" },
      { "title": "Jan 01, 2012 (2)", "image": "/media/resources/20120101_073630.JPG", "link": "#" },
      // { "title": "Jan 01, 2012 (3)", "image": "/media/resources/20120101_230345.JPG", "link": "#" },
      // { "title": "Jan 01, 2012 (4)", "image": "/media/resources/20120101_230355.JPG", "link": "#" },
      { "title": "Jan 07, 2012 (1)", "image": "/media/resources/20120107_021449.JPG", "link": "#" },
      { "title": "Jan 07, 2012 (2)", "image": "/media/resources/20120107_023517.JPG", "link": "#" },
      { "title": "Mar 08, 2012 (1)", "image": "/media/resources/20120308_092350 (1).JPG", "link": "#" },
      { "title": "Mar 08, 2012 (2)", "image": "/media/resources/20120308_093255.JPG", "link": "#" },
      { "title": "Mar 10, 2012 (1)", "image": "/media/resources/20120310_041150.JPG", "link": "#" },
      { "title": "Mar 10, 2012 (2)", "image": "/media/resources/20120310_052733.JPG", "link": "#" },
      { "title": "Mar 14, 2012 (1)", "image": "/media/resources/20120314_185032.JPG", "link": "#" },
      // { "title": "Mar 14, 2012 (2)", "image": "/media/resources/20120314_185721.JPG", "link": "#" },
      // { "title": "Mar 24, 2012", "image": "/media/resources/20120324_224900.JPG", "link": "#" },
      { "title": "Feb 17, 2022", "image": "/media/resources/20220217_125458.JPG", "link": "#" },
      { "title": "Apr 26, 2023", "image": "/media/resources/20230426_121805.JPG", "link": "#" },
      // { "title": "Jun 22, 2023", "image": "/media/resources/20230622_142148.JPG", "link": "#" },
      { "title": "Apr 18, 2024 (1)", "image": "/media/resources/20240418_130319.JPG", "link": "#" },
      { "title": "Apr 18, 2024 (2)", "image": "/media/resources/20240418_130339.JPG", "link": "#" },
      
      // Named Files
      { "title": "DSA Visit", "image": "/media/resources/DSA Visit.JPG", "link": "#" },
      { "title": "Geospatial Hub", "image": "/media/resources/Geospatial Hub.JPG", "link": "#" },
      { "title": "Inec Training", "image": "/media/resources/Inec Training.JPG", "link": "#" },
      // { "title": "NSA Visit", "image": "/media/resources/NSA Visit.JPG", "link": "#" },
      { "title": "On Going Training", "image": "/media/resources/on Going trainig.JPG", "link": "#" },
      { "title": "Visit of NDLEA", "image": "/media/resources/Visit of NDLEA.JPG", "link": "#" },
      // { "title": "Visit of the NSA", "image": "/media/resources/Visit of the NSA.JPG", "link": "#" }
    ],
    "downloads": [],
    "publications": [
      { title: "Eyes on Location – The Journal of GeoINSIGHT", id: "GeoINSIGHT", description: "Our flagship peer-reviewed journal featuring original research, policy analyses, and thought leadership on GEOINT and its applications.", link: "/newsletter" }
    ]
  };

  export default resourcesData;