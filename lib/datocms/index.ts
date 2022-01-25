const SiteClient = require("datocms-client").SiteClient;

export const DatoCMSData = new SiteClient(
  process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
  {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  },
);
