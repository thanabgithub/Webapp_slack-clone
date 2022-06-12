.PHONY:launch
up:
		docker-compose -down -v -t 1
		docker system prune -f
		echo "\n    🡇 CONTAINER TERMINAL 🡇\n\n"
		docker-compose up --build