import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "hr6jp4te",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk0dxZb1rV2kHWLtC5OhYmoe9fKgQ4h41jv0rNWsHlWDcn38uRC09NwCpPFVeMuO9QlNHKGiFclGP15oBeSZXMg54hhd8bapmERBhE5AfoIdNmeEII2FDlxrbUnQE6smFVdLNzhwp2WuoggF6ws5wMh8KDSpDip2G0orXWr4cwXDsSOj8vZp",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
