# TG EXAM Backend Developer Test

Laravel REST API with Product list

# SETUP GUIDE

### Clone the project

```bash
https - https://github.com/janzcio/TGEXAM.git
ssh - git@github.com:janzcio/TGEXAM.git
```

check out the project

```bash
```bash
cd TGEXAM/product-listing-backend
```

```

Php version should be `php >= 8.2` above

Run composer

```bash
composer install
```

### Connection guide

Config your connection or create `.env` file.

```bash
cp .env.example .env
php artisan key:generate
```

Create a `database` file the same database name value in your `.env` file for your connection. It is not necessary but for the project run requires a database connection.

### Run the project

```bash
php artisan serve
```

### API Reference

Product list endpoint
```bash
http://127.0.0.1:8000/api/products
```

