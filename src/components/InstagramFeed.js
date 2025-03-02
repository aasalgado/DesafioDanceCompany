"use client";
import { useEffect, useState } from "react";

export default function InstaFeed() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchInstagramImages() {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=IGQWROLWFLMjVmMUlWVldGSnFqRG1fSDFEOXlNQUs4QXNWeGNaQ3gtVjlFYV9hNEdxUjBpLWZAtTFVDQzZABbngwaTc3NFBFR2xPSmUzM2h5SFc5VGZAGWVZAjbWM4enJiTFpka19CN0NTOHcwZA0lTSks2N1g0a2dMNm8ZD`
        );
        const data = await response.json();
        const firstFiveMedia = data.data.slice(0, 4);
        // firstFiveMedia.push(data.data[4]);
        setImages(firstFiveMedia); // assuming data.data is the array of media items
      } catch (error) {
        console.error("Error fetching Instagram images:", error);
      }
    }
    fetchInstagramImages();
  }, []);

  return (
    <>
      {images.length > 0 && (
        <section id="instagram" className="py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Follow Us On Instagram
              </h2>
              <p className="text-muted-foreground">
                Stay Up-To-Date With Our Latest Performances And
                Behind-The-Scenes Moments.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
              {images.map((image) => (
                <div key={image.id} className="instagram-post">
                  {image.media_type === "IMAGE" && (
                    <a
                      href={image.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        key={image.id}
                        src={image.media_url}
                        alt={image.caption || "Instagram image"}
                        width={350}
                        height={350}
                        className="rounded-xl object-cover"
                        style={{ aspectRatio: "350/350", objectFit: "cover" }}
                      />
                    </a>
                  )}
                  {image.media_type === "VIDEO" && (
                    <video
                      key={image.id}
                      src={image.media_url}
                      controls
                      width={350}
                      height={350}
                      className="rounded-xl object-cover"
                      style={{ aspectRatio: "350/350", objectFit: "cover" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

//desafio
// IGQWRPMU5ZAUWxQemVDYUJ2N0ZAnSzhJRmwyZAHhNdEM5bVdpMlJTLUtDNXp0cmRlQkhRaDk4SUpvbENvUGc5dzNvRkFEOGlISWp2RG1CVmEycThvbGZAVUGpkanhPVHA1aG5yQ2xmbE5EcFY3TGg5Uk5Jc0g4NWdEQlUZD

// IGQWRQenFUcWhQUS1PTkVGUGFjNDAycUFoaWZAJNXRZATWFLRlRWVm0tYVJzbFFfeVlrLXNkT25XZATk3aFdYd2lSYUZASeDB2U0pBZAWh3bW1zZA2xuU21nNWhScHJoTTF3VklLdU9lekVvbzhTMnItZA1BuNVRuYjhzU2cZD

// <div>
//   <h1>Instagram Feed</h1>
//   <div className="instagram-feed">
//     {images.map((image) => (
//       <div key={image.id} className="instagram-post">
//         {image.media_type === "IMAGE" && (
//           <a
//             href={image.permalink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={image.media_url}
//               alt={image.caption || "Instagram image"}
//             />
//           </a>
//         )}
//         {image.media_type === "VIDEO" && (
//           <video controls>
//             <source src={image.media_url} type="video/mp4" />
//           </video>
//         )}
//         <p>{image.caption}</p>
//       </div>
//     ))}
//   </div>
// </div>

{
  /* <img
            src="/placeholder.svg"
            alt="Instagram Post 1"
            width={300}
            height={300}
            className="rounded-xl object-cover"
            style={{ aspectRatio: "300/300", objectFit: "cover" }}
          /> */
}
