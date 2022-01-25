---
title: Campos de solicitud de Transacción
sidebar_position: 4
---

**Una Solicitud de Transacción incluye:**

- Parámetros de autenticación
- Parámetros del cliente
- Parámetros de información de Pagos y Transacciones
- Parámetros de los productos
- Parámetros de Ajuste (utilizado para entrega de créditos, devoluciones y capturas atrasadas)
- Parámetros especificados por el comercio

## 4.1 Parámetros de Autenticación

| Nombre del campo | Descripción |
| ---- | ----------- |
| `req_username` | Usuario de servicio del comercio |
| `req_password` | Contraseña de servicio del comercio |
| `request_action` | Acción de solicitud de servicio|
| `request_api_version` | Versión de API de este documento. (4.4) |
| `request_response_format` | Formato de respuesta del servicio |
| `site_id` | ID de sitio web del comercio |

## 4.2 Parámetros del Cliente

| Nombre del campo | Descripción |
| ---- | ----------- |
| `bill_addr` | Calle de la dirección de facturación del tarjetahabiente |
| `bill_addr_city` | Ciudad de la dirección de facturación del tarjetahabiente |
| `bill_addr_country` | País de la dirección de facturación del tarjetahabiente |
| `bill_addr_state` | Estado de la dirección de facturación del tarjetahabiente |
| `bill_addr_zip` | Código postal de la dirección de facturación del tarjetahabiente |
| `cust_birthday` | Fecha de Nacimiento del tarjetahabiente. FORMATO: MM-DD-AAAA |
| `cust_dln` | Licencia de conducir del tarjetahabiente (Solo en EUA) |
| `cust_dln_state` | Estado de la licencia de conducir del tarjetahabiente (Solo en EUA) |
| `cust_email` | Correo del tarjetahabiente **Nota: es requerido por algunos bancos** |
| `cust_fname` | Nombre(s) del tarjetahabiente *Nota: Requerido por algunos bancos |
| `cust_lname` | Apellido(s) del tarjetahabiente *Nota: Requerido por algunos bancos.* |
| `cust_login` | Usuario del tarjetahabiente |
| `cust_password` | Contraseña del tarjetahabiente. La contraseña debe contener por lo menos 10 caracteres e incluir al menos un número, una mayúscula y una minúscula |
| `cust_phone` | Teléfono del tarjetahabiente Nota: Requerido por algunos bancos. |
| `cust_ssn_l4` | Últimos 4 dígitos del número del Seguro social (Solo en EUA) |
| `ship_addr` | Calle de la dirección de envío del tarjetahabiente |
| `ship_addr_city` | Ciudad de la dirección de envío del tarjetahabiente |
| `ship_addr_country` | País de la dirección de envío del tarjetahabiente |
| `ship_addr_state` | Estado de la dirección de envío del tarjetahabiente |
| `ship_addr_zip` | Código postal de la dirección de envío del tarjetahabiente |
| `site_id` | ID de sitio web del comercio |
| `xtl_ip` | Dirección IP del tarjetahabiente |
| `mbshp_id_xtl` | ID externo de membresía |

## 4.3 Parámetros de información de Banco y Pagos

| Nombre del campo | Descripción |
| ---- | ----------- |
| `pmt_descriptor` | Descriptor dinámico del banco |
| `pmt_descriptor_phone` | Número de servicio al cliente dinámico del banco (También conocido como Campo de ciudad) |
| `pmt_expiry` | Fecha de caducidad de la tarjeta de crédito|
| `pmt_key` | Código CVV2 o CVC2 de la tarjeta de crédito |
| `pmt_numb` | Número de tarjeta de crédito |
| `token_guid` | ID de token utilizado en lugar de pmt_numb. Ver sección de tokenización. |
| `pmt_l4` | Últimos 4 dígitos de la cuenta o tarjeta de crédito |
| `pmt_id` | Identificador único del pago |
| `pmt_id_xtl` | ID externo de pago |
| `request_currency` | Código de 3 caracteres de la divisa Ver sección de divisa |
| `merch_acct_id` | ID de cuenta del comercio |
| `Card_on_file_flag` | Indica si es una tarjeta anteriormente capturada y almacenada o una tarjeta nueva |

## 4.4 Parámetros de lista de productod

| Nombre del campo | Descripción |
| ---- | ----------- |
| `li_count_1` | Cantidad de líneas de artículos. Usa este parámetro para indicar cantidad. El valor máximo es “10”. |
| `li_prod_id_1` | ID de línea de producto 1 |
| `li_value_1` | Monto de transacción de línea de producto 1|

## 4.5 Parámetros de Ajuste

| Nombre del campo | Descripción |
| ---- | ----------- |
| `request_ref_po_id` | ID de referencia de orden se utiliza al mandar solicitud de ajuste contra autorizaciones (ejemplo, Captura demorada, Reversiones y solicitudes de reembolso). |
| `request_ref_po_li_id` | ID de referencia de línea de artículo. Usa esto si es necesario procesar múltiples líneas de artículo. |
| `cust_id` | ID de cliente creado por el Sistema después de enviar de forma exitosa una solicitud de autorización. |
| `request_ref_po_id_xtl` | Solicitud de referencia XTL_ORDER_ID (ID de orden del comercio). Utilizado para enviar solicitudes CCSTATUS. |
| `credit_on_fail` | Se utiliza con solicitudes de reversión (cancelaciones). Si se establece en 1, el sistema automáticamente reembolsará la transacción cuando la solicitud de reversión falle. Ver la explicación de CREDIT_ON FAIL para más detalles. |
| `force_credit` | Se utiliza en transacciones de reembolso forzado. |

## 4.6 Otros parámetros especificados por el comercio

:::danger

FALTA TERMINAR TABLA.

:::

## 4.7 Parámetros de Ajuste de Membresías

Cuando Zigu maneja sus membresías o suscripciones, a continuación, se muestran los parámetros necesarios para cualquier ajuste o cancelación.

| Nombre del campo | Descripción |
| ---- | ----------- |
| `request_ref_mbshp_id` | ID de membresía a referir |
| `sub_update_prod_id` | ID de nueva suscripción de producto: Utilizado para actualizar el ID actual del registro de membresías. |
| `sub_cancel_type` | Tipo de solicitud de cancelación de suscripción. |

## 4.8 Tokenización

En vez de introducir el número de tarjeta de crédito (PMT_ID) con una transacción, se puede utilizar un ID de Token (TOKEN_GUID). Este ID único es adquirido al enviar una solicitud a nuestro servicio de Token. El procedimiento para el uso de la tokenización es:

- 1) Enviar una solicitud al Servicio de Token
- 2) Recibir un ID de Token único
- 3) Enviar una solicitud de transacción al Sistema de procesamiento de transacciones utilizando

TOKEN_GUID
*! – El Token es único y de un solo uso. Un nuevo Token debe ser solicitado para cada transacción.*

### 4.8.1 Solicitando un Token

La solicitud del ID de Token debe ser enviada a la siguiente URL: 
<code>https://api.zigu.mx/payment/token_service.cfm?</code>

### 4.8.1.1 Parámetros de solicitud de token

A continuación, se muestran los parámetros utilizados en la solicitud de Token.

| Nombre del campo | Descripción |
| ---- | ----------- |
| `card_pan` | Número de tarjeta del cliente |
| `request_response_format` | XML o JSON |

** Ejemplo de Solicitud de Token **
<code>http://api.zigu.mx/payment/token_service.cfm?CARD_PAN=4111111111111111&REQUEST_RESPONSE_ FORMAT=json</code>

:::caution

Some **content** with `spaces`. Check this.

:::

### 4.8.1.2 Parámetros de respuesta de token

| Nombre del campo | Descripción |
| ---- | ----------- |
| `token_guid` | ID de token único el cual deberá ser enviado subsecuentemente en la solicitud de compra |
| `token_ip` | Dirección IP de solicitud de token |
| `token_reqid` | ID incremental de solicitud de token |

**Ejemplo de respuesta de token**

{
"TOKEN_GUID": "7BA39EAFDAAD6B3FA8A974098A267258E6D622D9", 
"TOKEN_IP": "10.13.100.134",
"TOKEN_REQID": "4283012"
}

### 4.8.2 Solicitud CCAUTHCAP utilizando tokenización

**Ejemplo:**

http://api.(Company)pay.com/payment/pmt_service.cfm?request_action=CCAU THCAP&request_api_version=4.4&req_username=test@example.com&req_passwor d=Example0905&site_id=1111&request_response_format=JSON&li_value_1=10&l i_prod_id_1=1001&TOKEN_GUID=7BA39EAFDAAD6B3FA8A974098A267258E6D622D9&PM T_KEY=123&PMT_EXPIRY=082025&MERCH_ACCT_ID=100&CUST_FNAME=Mister&CUST_LN AME=Customer&BILL_ADDR=123MainSt.&BILL_ADDR_CITY=LosAngeles&BILL_ADDR_S TATE=CA&BILL_ADDR_ZIP=90032&BILL_ADDR_COUNTRY=US&CUST_EMAIL=test@test.c om&REQUEST_CURRENCY=USD

:::caution

Checkar `syntax`.

:::