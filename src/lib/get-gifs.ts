export const getGifs = async ({
  category,
  limit = 10,
}: {
  category: string;
  limit?: number;
}) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}`;
  console.log({ url });
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id,
        title,
        url,
      };
    }
  );
};
