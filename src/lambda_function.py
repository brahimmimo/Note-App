import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Notes')

def lambda_handler(event, context):
    # Parse the request body
    try:
        body = json.loads(event['body'])
        note = body['note']
    except (json.JSONDecodeError, KeyError) as e:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Invalid input'})
        }

    # Create a unique ID for the note
    note_id = context.aws_request_id

    # Prepare the item to insert into DynamoDB
    item = {
        'NoteId': note_id,
        'Note': note,
    }


    # Insert the item into the DynamoDB table
    try:
        table.put_item(Item=item)
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Note created successfully', 'NoteId': note_id})
        }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Could not create note'})
        }
