PGDMP     6                    z            3piTest    14.5    14.5     
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    3piTest    DATABASE     e   CREATE DATABASE "3piTest" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "3piTest";
                postgres    false            ?            1259    16422    products    TABLE     ?   CREATE TABLE public.products (
    name character varying(30) NOT NULL,
    price integer NOT NULL,
    description character varying(30),
    id uuid NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            ?            1259    16398    roles    TABLE     ]   CREATE TABLE public.roles (
    id uuid NOT NULL,
    name character varying(30) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            ?            1259    16401    sales    TABLE     ?   CREATE TABLE public.sales (
    qty integer NOT NULL,
    sale_at timestamp without time zone,
    id uuid NOT NULL,
    products_id uuid NOT NULL,
    users_id uuid NOT NULL
);
    DROP TABLE public.sales;
       public         heap    postgres    false            ?            1259    16442    test    TABLE     3   CREATE TABLE public.test (
    id uuid NOT NULL
);
    DROP TABLE public.test;
       public         heap    postgres    false            ?            1259    16395    users    TABLE     ?   CREATE TABLE public.users (
    document character varying(20),
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    last_name character varying(30),
    role_id uuid
);
    DROP TABLE public.users;
       public         heap    postgres    false                      0    16422    products 
   TABLE DATA           @   COPY public.products (name, price, description, id) FROM stdin;
    public          postgres    false    212   I                 0    16398    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    210   ?                 0    16401    sales 
   TABLE DATA           H   COPY public.sales (qty, sale_at, id, products_id, users_id) FROM stdin;
    public          postgres    false    211   )                 0    16442    test 
   TABLE DATA           "   COPY public.test (id) FROM stdin;
    public          postgres    false    213   ?                 0    16395    users 
   TABLE DATA           G   COPY public.users (document, id, name, last_name, role_id) FROM stdin;
    public          postgres    false    209   ?       r           2606    16426    products products_id 
   CONSTRAINT     R   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_id PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.products DROP CONSTRAINT products_id;
       public            postgres    false    212            n           2606    16407    roles role_id 
   CONSTRAINT     K   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT role_id PRIMARY KEY (id);
 7   ALTER TABLE ONLY public.roles DROP CONSTRAINT role_id;
       public            postgres    false    210            p           2606    16413    sales sales_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT sales_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.sales DROP CONSTRAINT sales_pkey;
       public            postgres    false    211            t           2606    16446    test test_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.test DROP CONSTRAINT test_pkey;
       public            postgres    false    213            l           2606    16417    users users_id 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT users_id;
       public            postgres    false    209            v           2606    16427    sales products_id    FK CONSTRAINT     ?   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT products_id FOREIGN KEY (products_id) REFERENCES public.products(id) NOT VALID;
 ;   ALTER TABLE ONLY public.sales DROP CONSTRAINT products_id;
       public          postgres    false    3186    212    211            u           2606    16432    users roles_id    FK CONSTRAINT     w   ALTER TABLE ONLY public.users
    ADD CONSTRAINT roles_id FOREIGN KEY (role_id) REFERENCES public.roles(id) NOT VALID;
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT roles_id;
       public          postgres    false    3182    209    210            w           2606    16437    sales users_id    FK CONSTRAINT     x   ALTER TABLE ONLY public.sales
    ADD CONSTRAINT users_id FOREIGN KEY (users_id) REFERENCES public.users(id) NOT VALID;
 8   ALTER TABLE ONLY public.sales DROP CONSTRAINT users_id;
       public          postgres    false    3180    211    209               }  x???MN?0???)|?ANƿˊJl@? lƎ]"??r[??E?M?xk??????*??? ??y]?FhqGA8??J?? )???J?vu?J򳊭G??Ay?V????]??V?Ũ??Z??}??T]?K5e??́?n?٦?????e?G?G?}me?.????v??W?:?0{???Tʛ?0?????tz'??yH???5c/?5??G?y????T????|????T?? ?A?0?$|???P??|??o??1?tc?x???P?P?t?)Ӕ??2?4K?K???R ? ?ls???tܡ???#ۧ??????,?|4_?S??󸳟
3ҵ??X.??NS???~?d??Y??b*쮩?/????m?oT?D?         C   x?31?LKJ4H?MJLL?5I21ӵ4M4ҵ0N433?0?Ĕ??<.?J?9Ssr?+SS?b???? ???         I   x?3????41?LKJ4H?MJLL?5I21ӵ4M4ҵ0N433?04731'F?1?,?L????` ?4???1z\\\ +?WZ            x?????? ? ?         o   x???K@0??q?*??
??	+0??I?	???\"ę?識)?5n?)?Mkq?+#:??p????F9??r?u?KL?Sx`C????Q??????????0T p>%l?     