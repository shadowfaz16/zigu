---
sidebar_position: 3
---

# Autenticación

## 3.1 Ubicación

El Servicio de Pago se encuentra en: 

- ```https://api.zigu.mx/payment/pmt_service.cfm```

## 3.2 Codificación

La API de Servicio de Pago utiliza el Formato de Transformación de 8-bits de Unicode descrito en el ISO/ISE 10646. Los comercios deben enviar la solicitud de servicio con Content-type, 
```shell
“application/x-www-form-urlencoded”; y charset, “iso-8859-1,*, 
utf-8” utilizando el método Post de HTTP.
```

## 3.3 Prueba de Autenticación del Servicio

EL primer requerimiento para la integración con el Servicio de Pagos es tener un Service usuario, contraseña y ID de sitio web.

### 3.3.1 Campos de autenticación

| Nombre del campo | Descripción |
| ---- | ----------- |
| `req_username` | Usuario de servicio del comercio |
| `req_password` | Contraseña de servicio del comercio |
| `site_id` | ID de sitio web del comercio |
| `request_action` | Acción de solicitud de servicio: **TESTAUTH** |
| `request_response_format` | Formato de respuesta del servicio |
| `request_api_version` | Versión de API de este documento. (4.4) Debe ser enviada en todas las solicitudes al Sistema de procesamiento de transacciones. |


### 3.3.2 Ejemplo de Solicitud de Autenticación

A continuación, hay un ejemplo completo de una solicitud POST en HTTP (incluyendo la información del header) que contiene los campos requeridos para hacer las pruebas básicas de autenticación del Sistema de procesamiento de transacciones:

```
POST /payment/pmt_service.cfm HTTP/1.0

User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)

Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/x-shockwave-flash,
 application/vnd.ms-powerpoint, application/vnd.ms-excel, application/msword, */*

Accept-Encoding: identity

Accept-Language: en-us,en

Host: my.host.invalid

Accept-Charset: iso-8859-1,*,utf-8

Content-Type: application/x-www-form-urlencoded 

Content-Length: 137

req_username=test@example.com&req_password=P5ssw0rd!1&request_action=TESTAUTH&site_id=0
 &request_response_format=XML&request_api_version=4.4
```

### 3.3.3 Ejemplo de Respuesta de Autenticación

Cada solicitud de Respuesta generará un documento de respuesta correspondiente

```
<RESPONSE>

  <REQUEST_ACTION/> 

  <TRANS_STATUS_NAME/> <TRANS_VALUE/> 

  <TRANS_ID/>

  <CUST_ID/> 

  <XTL_CUST_ID/> 

  <MERCH_ACCT_ID/> 

  <CARD_BRAND_NAME/>

  <PMT_L4/>

  <API_RESPONSE>0</API_RESPONSE>

  <API_ADVICE> </API_ADVICE> 

  <SERVICE_RESPONSE>100</SERVICE_RESPONSE> 

  <SERVICE_ADVICE>User Authorized</SERVICE_ADVICE> 

  <PROCESSOR_RESPONSE>0</PROCESSOR_RESPONSE> 

  <PROCESSOR_ADVICE> </PROCESSOR_ADVICE> 

  <INDUSTRY_RESPONSE>0</INDUSTRY_RESPONSE> 

  <INDUSTRY_ADVICE> </INDUSTRY_ADVICE> 

  <REF_FIELD/>

  <PROC_ID/>

  <PROC_NAME/>

  <AVS_RESPONSE/>

  <CVV_RESPONSE/> 

  <REQUEST_API_VERSION>4.4</REQUEST_API_VERSION>

</RESPONSE>
```

### 3.3.4 Ejemplo de Respuesta de Autenticación Fallida

A continuación, hay un ejemplo de una Respuesta de Solicitud de Autenticación Fallida. API_RESPONSE”101” indica un intento de autenticación fallido.

```
<?xml version=”1.0” encoding=”UTF-8”?> 

<RESPONSE>

    <REQUEST_ACTION/> <TRANS_STATUS_NAME/> <TRANS_VALUE/> <TRANS_ID/>

    <CUST_ID/>

    <XTL_CUST_ID/>

    <MERCH_ACCT_ID/>

    <CARD_BRAND_NAME/>

    <PMT_L4/>

    <PMT_ID/>

    <PMT_ID_XTL/> 

    <API_RESPONSE>101</API_RESPONSE> 

    <API_ADVICE>Invalid login information</API_ADVICE> 

    <SERVICE_RESPONSE>0</SERVICE_RESPONSE> 

    <SERVICE_ADVICE>Declined</SERVICE_ADVICE> 

    <PROCESSOR_RESPONSE>0</PROCESSOR_RESPONSE> 

    <PROCESSOR_ADVICE> </PROCESSOR_ADVICE> 

    <INDUSTRY_RESPONSE>0</INDUSTRY_RESPONSE> 

    <INDUSTRY_ADVICE> </INDUSTRY_ADVICE> 

    <REF_FIELD/>

    <PROC_NAME/>

    <AVS_RESPONSE/>

    <CVV_RESPONSE/> <REQUEST_API_VERSION>4.4</REQUEST_API_VERSION>

</RESPONSE>
 ```

## 3.4 Revisión de la Disponibilidad del Servicio

Utilice la acción, “TESTGW”, Para revisar si el Servicio de Pagos está disponible para procesar solicitudes.

### 3.4.1 Campos para la Revisión de disponibilidad de Servicio

| Nombre del campo | Descripción |
| ---- | ----------- |
| `req_username` | Usuario de servicio del comercio |
| `req_password` | Contraseña de servicio del comercio |
| `site_id` | ID de sitio web del comercio |
| `request_action` | Acción de solicitud de servicio: **TESTAUTH** |
| `request_response_format` | Formato de respuesta del servicio |
| `request_api_version` | Versión de API de este documento. (4.4) Debe ser enviada en todas las solicitudes al Sistema de procesamiento de transacciones. |

### 3.4.2 Ejemplo de solicitud para Revisión de Disponibilidad de Servicio

```
POST /payment/pmt_service.cfm HTTP/1.0

User-Agent: Mozilla/4.4 (compatible; MSIE 7.0; Windows NT 5.1)

Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/x-shockwave-flash, application/vnd.ms-powerpoint, applicati

Accept-Encoding: identity

Accept-Language: en-us,en

Host: API.PLGW.com

Accept-Charset: iso-8859-1,*,utf-8

Content-Type: application/x-www-form-urlencoded Content-Length: 112

req_username=test@example.com&req_password=P5ssw0rd!1&request_action=TESTGW&site_id=0&request_response_format=XML&request_api_version=4.4

 ```

### 3.4.3 Ejemplo de respuesta de revisión de disponibilidad

```
<?xml version=”1.0” encoding=”UTF-8”?> 
<RESPONSE>
    <REQUEST_ACTION/> <TRANS_STATUS_NAME/> <TRANS_VALUE/>
    <TRANS_ID/> <CUST_ID/> <XTL_CUST_ID/>7 <MERCH_ACCT_ID/> <CARD_BRAND_NAME/> <PMT_L4/>
    <PMT_ID/>
    <PMT_ID_XTL/>
<API_RESPONSE>0</API_RESPONSE>
<API_ADVICE> </API_ADVICE> <SERVICE_RESPONSE>101</SERVICE_RESPONSE> <SERVICE_ADVICE>Service Available</SERVICE_ADVICE> <PROCESSOR_RESPONSE>0</PROCESSOR_RESPONSE> <PROCESSOR_ADVICE> </PROCESSOR_ADVICE> <INDUSTRY_RESPONSE>0</INDUSTRY_RESPONSE> <INDUSTRY_ADVICE> </INDUSTRY_ADVICE> <REF_FIELD/>
<PROC_ID/>
<PROC_NAME/>
<AVS_RESPONSE/>
<CVV_RESPONSE/> <REQUEST_API_VERSION>4.4</REQUEST_API_VERSION>
</RESPONSE>
```

### 3.4.4 Ejemplo de respuesta fallida de revisión de disponibilidad

```
<?xml version=”1.0” encoding=”UTF-8”?> 

<RESPONSE>

    <REQUEST_ACTION/> 

    <TRANS_STATUS_NAME/> 

    <TRANS_VALUE/> 

    <TRANS_ID/>

    <CUST_ID/> 

    <XTL_CUST_ID/> 

    <MERCH_ACCT_ID/>

    <CARD_BRAND_NAME/> 

    <PMT_L4/>

    <PMT_ID/>

    <PMT_ID_XTL/>

    <API_RESPONSE></API_RESPONSE>

    <API_ADVICE> </API_ADVICE> 

    <SERVICE_RESPONSE></SERVICE_RESPONSE> 

    <SERVICE_ADVICE> Service Unavailable </SERVICE_ADVICE> 

    <PROCESSOR_RESPONSE>0</PROCESSOR_RESPONSE> 

    <PROCESSOR_ADVICE> </PROCESSOR_ADVICE> 

    <INDUSTRY_RESPONSE>0</INDUSTRY_RESPONSE> 

    <INDUSTRY_ADVICE> </INDUSTRY_ADVICE>

    <REF_FIELD/>

    <PROC_NAME/>

    <AVS_RESPONSE/>

    <CVV_RESPONSE/> 

    <REQUEST_API_VERSION>4.4</REQUEST_API_VERSION>

</RESPONSE>
```