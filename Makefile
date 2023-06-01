
1-config:
	@npm i
	@npx sequelize-cli init
	@code example.env

2-config:
	@code config/config.json

run:
	@npx sequelize-cli db:create
	@npx sequelize-cli db:migrate