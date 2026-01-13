import React from 'react';

export interface ResourceItem {
  id: string;
  title: string | React.ReactNode;
  date?: string;
  description?: string | React.ReactNode;
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
      {"id":"1", "title": "Jan 01, 2012 (2)", "image": "/media/resources/20120101_073630.JPG", "link": "#" },
      {"id":"3", "title": "Jan 07, 2012 (2)", "image": "/media/resources/20120107_023517.JPG", "link": "#" },
      {"id":"4", "title": "Mar 08, 2012 (1)", "image": "/media/resources/20120308_092350 (1).JPG", "link": "#" },
      {"id":"5", "title": "Mar 08, 2012 (2)", "image": "/media/resources/20120308_093255.JPG", "link": "#" },
      {"id":"6", "title": "Mar 10, 2012 (1)", "image": "/media/resources/20120310_041150.JPG", "link": "#" },
      {"id":"7", "title": "Mar 10, 2012 (2)", "image": "/media/resources/20120310_052733.JPG", "link": "#" },
      {"id":"8", "title": "Our serene training facility", "image": "/media/resources/20120314_185032.JPG", "link": "#" },
      {"id":"10", "title": "Apr 26, 2023", "image": "/media/resources/20230426_121805.JPG", "link": "#" },
      {"id":"11", "title": "Apr 18, 2024 (1)", "image": "/media/resources/20240418_130319.JPG", "link": "#" },
      {"id":"12", "title": "Apr 18, 2024 (2)", "image": "/media/resources/20240418_130339.JPG", "link": "#" },
      
      // Named Files
      {"id":"13", "title": "DSA Visit", "image": "/media/resources/DSA Visit.JPG", "link": "#" },
      {"id":"14", "title": "Geospatial Hub", "image": "/media/resources/Geospatial Hub.JPG", "link": "#" },
      {"id":"15", "title": "Inec Training", "image": "/media/resources/Inec Training.JPG", "link": "#" },
      {"id":"16", "title": "On Going Training", "image": "/media/resources/on Going trainig.JPG", "link": "#" },
      {"id":"17", "title": "Visit of NDLEA", "image": "/media/resources/Visit of NDLEA.JPG", "link": "#" },
      {"id":"18", "title": " ", "image": "/media/resources/asdfgh.png", "link": "/media/resources/asdfghjk.mp4", "type": "video" },
    ],
    "downloads": [],
    "publications": [
      { 
        title:
        <>
          <p>- Eyes on Location -</p>
          <p>The GeoINSIGHT Bulletin</p>
        </>, 
        id: "GeoINSIGHT", 
        description: <>The GeoINSIGHT Bulletin is <span className="cooper">GIFON</span>&apos;s official monthly newsletter, designed to provide timely updates, insights, and highlights from the world of geospatial intelligence (GEOINT), innovation, and national development initiatives.</>, 
        link: "/the-geoinsight-bulletin" },
      { 
        title:
        <>
          <p>- GeoINSIGHT -</p>
          <p>The Journal of Geospatial Intelligence</p>
        </>, 
        id: "Geospatial", 
        description: <>GeoINSIGHT is <span className="cooper">GIFON</span>&apos;s flagship journal, dedicated to advancing knowledge, research, and discourse in geospatial intelligence (GEOINT), spatial data science, and location based innovation.</> ,
        link: "/the-GeoINSIGHT-journal" }
    ]
  };

  export default resourcesData;