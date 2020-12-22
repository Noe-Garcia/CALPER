FROM alpine:3.12.3

RUN apk add --no-cache python3 py3-pip

WORKDIR /app

COPY . /app

RUN pip3 --no-cache-dir install -r requirements.txt

RUN pip install requests

CMD ["python3", "src/app.py"]
