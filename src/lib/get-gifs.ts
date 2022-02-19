export const getGifs = async ({
  category,
  limit = 10,
}: {
  category: string;
  limit?: number;
}) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=${limit}&api_key=${category}`;
  const response = await fetch(url);
  const { data } = await response.json();
  console.log("Get gifs >> ", { data });

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
