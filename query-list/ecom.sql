create table if not exists products_table (id serial primary key, product_name varchar(255) not null, product_description text, price decimal(10, 2), currency char(3), product_img_url varchar(255), stock int )

CREATE TABLE if not exists cart_items (
    id INT PRIMARY KEY,
    product_id INT,
    quantity INT
);