FROM python:3.9.23-alpine3.22
WORKDIR /src
COPY . .
EXPOSE 4001
RUN pip install -r requirements.txt
CMD python3 server.py

