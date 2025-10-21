export interface Testimonial {
  // PUBLIC_INTERFACE
  /** The display name of the person giving the testimonial */
  author: string;
  // PUBLIC_INTERFACE
  /** The role/title of the person */
  role: string;
  // PUBLIC_INTERFACE
  /** Company or organization name */
  company: string;
  // PUBLIC_INTERFACE
  /** The testimonial quote text */
  quote: string;
}
