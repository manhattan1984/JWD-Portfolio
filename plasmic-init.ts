import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "6qxNRSxzkGUX7WyLbRi4x2",
      token: "8f00qUljFwvNRoa1Z91MVh59qlOKPdXM7BvecErasxlPSIPPjmAoCyXtVK2s3Jg5gPLBXb9kmUE9V6jp7hg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
