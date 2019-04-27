## プロジェクト作成

ディレクトリ作成
```
mkdir helloworld
```

移動
```
cd helloworld
```


テンプレートから作成  
```
sls create -t aws-nodejs-typescript
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

## Lambdaへリクエスト(正確にはAPI Gatewayのエンドポイント)

リクエスト
```
curl -s endpoint_url | jq .message
```