<?php

namespace App\Repositories;

use GuzzleHttp\Client;

class ProductRepository
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function getAllProducts()
    {
        $response = $this->client->get('https://dummyjson.com/products');
        $body = $response->getBody();

        return json_decode($body, true);
    }
}
