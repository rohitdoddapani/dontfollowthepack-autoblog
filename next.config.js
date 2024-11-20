/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "oaidalleapiprodscus.blob.core.windows.net",
          port: "",
          pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "fastly.picsum.photos",
            port: "",
            pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "i.ytimg.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "qakkspvhxfwkttmbalej.supabase.co",
            port: "",
            pathname: "/**",
          },
      ],
    },
  };

module.exports = nextConfig
