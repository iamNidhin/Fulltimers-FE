export const getAnnouncements = async () => {
  try {
    const response = await fetch(
      'https://missionary.co.in/api/hello',
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};