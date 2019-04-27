import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: event.body,
      input: event,
    }, null, 2),
  };
}
