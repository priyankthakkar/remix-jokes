import { json } from "@remix-run/node";

/**
 * This helper function helps us to return accurate HTTP status,
 * 400 bad request to the client.
 */
export const badRequest = <T>(data: T) => {
  return json(data, {
    status: 400,
  });
};
