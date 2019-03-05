exports.USER_FIELDS = process.env.USER_FIELDS ? process.env.USER_FIELDS.split(',') : [];
exports.HASURA_GQE_ENDPOINT = process.env.HASURA_GQE_ENDPOINT || 'https://hasura.your-app.com/v1alpha1/graphql';
exports.HASURA_GQE_ADMIN_SECRET = process.env.HASURA_GQE_ADMIN_SECRET || 'hasura-admin-secret';
exports.HASURA_GQE_JWT_SECRET = process.env.HASURA_GQE_JWT_SECRET ? JSON.parse(process.env.HASURA_GRAPHQL_JWT_SECRET) : {'type':'HS256', 'key': 'secretkey'};
exports.S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || 's3-access-key-id';
exports.S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || 's3-secret-access-key';
exports.S3_ENDPOINT = process.env.S3_ENDPOINT || 's3-endpoint';
exports.S3_BUCKET = process.env.S3_BUCKET || 's3-bucketname';
exports.DOMAIN = process.env.DOMAIN || 'localhost'; // or your backend host. Ex: backend.your-app.com
exports.REFETCH_TOKEN_EXPIRES = process.env.REFETCH_TOKEN_EXPIRES || 54000;