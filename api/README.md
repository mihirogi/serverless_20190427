## プロジェクト作成

ディレクトリ作成
```
mkdir api
```

移動
```
cd api
```

テンプレートから作成  
```
sls create -t aws-nodejs-typescript
```

serverless-offlineのインストール
```
npm install serverless-offline --save-dev
```

## デプロイ&削除

デプロイ
```
sls deloy
```

削除
```
sls remove
```