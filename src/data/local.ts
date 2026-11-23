/** Local SEO. Ask the client to review the nearby-city list. */
export const localCity = 'Newark, DE';
export const localAreas = ['Newark', 'Bear', 'Christiana', 'Glasgow', 'Pike Creek', 'Hockessin', 'Wilmington', 'Middletown', 'Elkton, MD'];

export function localFor(topic: string) {
  return {
    city: localCity,
    eyebrow: `Serving ${localCity}`,
    sectionTitle: `${topic} in ${localCity}`,
    areas: localAreas,
    text: [
      `Our office is inside the Omega Professional Center at 54 Omega Drive, Suite F, so ${topic.toLowerCase()} is close to home for families across ${localCity} and the towns around it.`,
      'Patients come from nearby communities for care that is built around them. Call us and we will find a time that works.',
    ],
  };
}
