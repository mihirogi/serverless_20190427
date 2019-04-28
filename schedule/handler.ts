import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import * as Slack from "typed-slack";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const endpoint = process.env.WEBHOOK
  const slack = new Slack.IncomingWebhook(endpoint);
  const option = <Slack.IncomingWebhookOptions>{
    text:'hello! slack!',
    channel:'cron_ch'
  }
  await slack.send(option);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}
