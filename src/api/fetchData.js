export const fetchData = async (url) => {
    try {
      const response = await fetch(
        'https://missionary.co.in/api/' + url,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };