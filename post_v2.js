const response = pm.response.json();

const v2_placa = response['data']['field_placa'];
const v2_vin = response['data']['field_vin_cr'];
const v2_marca = response['data']['field_marca'];
const v2_modelo = response['data']['field_modelo'];
const v2_a_modelo = response['data']['field_a_modelo'];
const v2_tipo = response['data']['field_tipo'];
const v2_clase = response['data']['field_clase'];
const v2_observaciones = response['data']['field_observaciones'];
const v2_datos_complementarios = response['data']['field_datos_complementarios'];
const v2_n_mero_de_constancia_de_in = response['data']['field_n_mero_de_constancia_de_in'];
const v2_instituci_n_que_lo_inscrib = response['data']['field_instituci_n_que_lo_inscrib'];
const v2_fecha_de_inscripci_n = response['data']['field_fecha_de_inscripci_n'];
const v2_estado_republica_txt = response['data']['field_estado_republica_txt'];
const v2_ultima_actualizaci_n = response['data']['field_ultima_actualizaci_n'];
const v2_estatus_pgr = response['data']['field_estatus_pgr'];
const v2_entidad_pgr = response['data']['field_entidad_pgr'];
const v2_fecha_de_robo_pgr = response['data']['field_fecha_de_robo_pgr'];
const v2_fecha_de_averiguacion_pgr = response['data']['field_fecha_de_averiguacion_pgr'];
const v2_entidad_de_recuperacion_pgr = response['data']['field_entidad_de_recuperacion_pgr'];
const v2_fecha_de_recuperacion_pgr = response['data']['field_fecha_de_recuperacion_pgr'];
const v2_fecha_de_actualizacion_pgr = response['data']['field_fecha_de_actualizacion_pgr'];
const v2_estatus_ocra = response['data']['field_estatus_ocra'];
const v2_fecha_de_actualizaci_ocra = response['data']['field_fecha_de_actualizaci_ocra'];
const v2_fecha_de_robo_ocra = response['data']['field_fecha_de_robo_ocra'];
const v2_fecha_de_averiguacion_ocra = response['data']['field_fecha_de_averiguacion_ocra'];
const v2_fecha_de_recuperacion_ocra = response['data']['field_fecha_de_recuperacion_ocra'];
const v2_entitad_ocra = response['data']['field_entitad_ocra'];
const v2_entidad_de_recuperaci_ocra = response['data']['field_entidad_de_recuperaci_ocra'];
const v2_numero_puertas = response['data']['field_numero_puertas'];
const v2_pais_origen = response['data']['field_pais_origen'];
const v2_version = response['data']['field_version'];
const v2_desplazamiento = response['data']['field_desplazamiento'];
const v2_n_mero_de_cilindros = response['data']['field_n_mero_de_cilindros'];
const v2_planta_de_ensamble = response['data']['field_planta_de_ensamble'];
const v2_fecha_de_emisi_n = response['data']['field_fecha_de_emisi_n'];
const v2_detalles_pgr = response['data']['field_detalles_pgr'];
const v2_detalles_ocra = response['data']['field_detalles_ocra'];
const v2_folio_de_constancia_de_ins = response['data']['field_folio_de_constancia_de_ins'];
const v2_hora_de_inscripci_n = response['data']['field_hora_de_inscripci_n'];
const v2_idRepuve = response['data']['idRepuve'];
const v2_idRobado = response['data']['idRobado'];
const v2_idOcra = response['data']['idOcra'];
const v2_code = response['data']['code'];

pm.test("PLACA Equal", () => {
    pm.expect(v2_placa).to.be.eql(pm.variables.get("v3_placa"));
});
pm.test("VIN Equal", () => {
    pm.expect(v2_vin).to.be.eql(pm.variables.get("v3_vin"));
});
pm.test("MARCA Equal", () => {
    pm.expect(v2_marca).to.be.eql(pm.variables.get("v3_marca"));
});
pm.test("MODELO Equal", () => {
    pm.expect(v2_modelo).to.be.eql(pm.variables.get("v3_modelo"));
});
pm.test("MODELO A Equal", () => {
    pm.expect(v2_a_modelo).to.be.eql(pm.variables.get("v3_a_modelo"));
});
pm.test("TIPO Equal", () => {
    pm.expect(v2_tipo).to.be.eql(pm.variables.get("v3_tipo"));
});
pm.test("CLASE Equal", () => {
    pm.expect(v2_clase).to.be.eql(pm.variables.get("v3_clase"));
});
pm.test("OBSERVACIONES Equal", () => {
    pm.expect(v2_observaciones).to.be.eql(pm.variables.get("v3_observaciones"));
});
pm.test("DATOS COM Equal", () => {
    pm.expect(v2_datos_complementarios).to.be.eql(pm.variables.get("v3_datos_complementarios"));
});
pm.test("NUMERO CONSTANCIA IN Equal", () => {
    pm.expect(v2_n_mero_de_constancia_de_in).to.be.eql(pm.variables.get("v3_n_mero_de_constancia_de_in"));
});
pm.test("INSTITUCION INS Equal", () => {
    pm.expect(v2_instituci_n_que_lo_inscrib).to.be.eql(pm.variables.get("v3_instituci_n_que_lo_inscrib"));
});
pm.test("FECHA INSC Equal", () => {
    pm.expect(v2_fecha_de_inscripci_n).to.be.eql(pm.variables.get("v3_fecha_de_inscripci_n"));
});
pm.test("ESTADO REPUBLIC Equal", () => {
    pm.expect(v2_estado_republica_txt).to.be.eql(pm.variables.get("v3_estado_republica_txt"));
});
pm.test("ULT ACTUALI Equal", () => {
    pm.expect(v2_ultima_actualizaci_n).to.be.eql(pm.variables.get("v3_ultima_actualizaci_n"));
});
pm.test("ESTATUS PGR Equal", () => {
    pm.expect(v2_estatus_pgr).to.be.eql(pm.variables.get("v3_estatus_pgr"));
});
pm.test("ENTIDAD PGR Equal", () => {
    pm.expect(v2_entidad_pgr).to.be.eql(pm.variables.get("v3_entidad_pgr"));
});
pm.test("FECHA ROBO PGR Equal", () => {
    pm.expect(v2_fecha_de_robo_pgr).to.be.eql(pm.variables.get("v3_fecha_de_robo_pgr"));
});
pm.test("FECHA AVERIGUACION Equal", () => {
    pm.expect(v2_fecha_de_averiguacion_pgr).to.be.eql(pm.variables.get("v3_fecha_de_averiguacion_pgr"));
});
pm.test("ENTIDAD RECUPER Equal", () => {
    pm.expect(v2_entidad_de_recuperacion_pgr).to.be.eql(pm.variables.get("v3_entidad_de_recuperacion_pgr"));
});
pm.test("FECHA RECU Equal", () => {
    pm.expect(v2_fecha_de_recuperacion_pgr).to.be.eql(pm.variables.get("v3_fecha_de_recuperacion_pgr"));
});
pm.test("FECHA DE ACTU Equal", () => {
    pm.expect(v2_fecha_de_actualizacion_pgr).to.be.eql(pm.variables.get("v3_fecha_de_actualizacion_pgr"));
});
pm.test("ESTATUS OCRA Equal", () => {
    pm.expect(v2_estatus_ocra).to.be.eql(pm.variables.get("v3_estatus_ocra"));
});
pm.test("FECHA ACTUA Equal", () => {
    pm.expect(v2_fecha_de_actualizaci_ocra).to.be.eql(pm.variables.get("v3_fecha_de_actualizaci_ocra"));
});
pm.test("FECHA ROBO OCRA Equal", () => {
    pm.expect(v2_fecha_de_robo_ocra).to.be.eql(pm.variables.get("v3_fecha_de_robo_ocra"));
});
pm.test("FECHA DE AVERI Equal", () => {
    pm.expect(v2_fecha_de_averiguacion_ocra).to.be.eql(pm.variables.get("v3_fecha_de_averiguacion_ocra"));
});
pm.test("FECHA DE RECUPERA Equal", () => {
    pm.expect(v2_fecha_de_recuperacion_ocra).to.be.eql(pm.variables.get("v3_fecha_de_recuperacion_ocra"));
});
pm.test("ENTIDAD OCRA Equal", () => {
    pm.expect(v2_entitad_ocra).to.be.eql(pm.variables.get("v3_entidad_ocra"));
});
pm.test("ENTIDAD DE RECUPERA Equal", () => {
    pm.expect(v2_entidad_de_recuperaci_ocra).to.be.eql(pm.variables.get("v3_entidad_de_recuperaci_ocra"));
});
pm.test("NUMERO PUERTAS Equal", () => {
    pm.expect(v2_numero_puertas).to.be.eql(pm.variables.get("v3_numero_puertas"));
});
pm.test("PAIS ORIGEN Equal", () => {
    pm.expect(v2_pais_origen).to.be.eql(pm.variables.get("v3_pais_origen"));
});
pm.test("VERSION Equal", () => {
    pm.expect(v2_version).to.be.eql(pm.variables.get("v3_version"));
});
pm.test("DESPLZAMIENTO Equal", () => {
    pm.expect(v2_desplazamiento).to.be.eql(pm.variables.get("v3_desplazamiento"));
});
pm.test("NUMERO CILINDROS Equal", () => {
    pm.expect(v2_n_mero_de_cilindros).to.be.eql(pm.variables.get("v3_n_mero_de_cilindros"));
});
pm.test("PLANTA ENSAMBLE Equal", () => {
    pm.expect(v2_planta_de_ensamble).to.be.eql(pm.variables.get("v3_planta_de_ensamble"));
});
pm.test("FECHA EMISION Equal", () => {
    pm.expect(v2_fecha_de_emisi_n).to.be.eql(pm.variables.get("v3_fecha_de_emisi_n"));
});
pm.test("DETALLES PGR Equal", () => {
    pm.expect(v2_detalles_pgr).to.be.eql(pm.variables.get("v3_detalles_pgr"));
});
pm.test("DETALLES OCRA Equal", () => {
    pm.expect(v2_detalles_ocra).to.be.eql(pm.variables.get("v3_detalles_ocra"));
});
pm.test("FOLIO CONSTANCIA INS Equal", () => {
    pm.expect(v2_folio_de_constancia_de_ins).to.be.eql(pm.variables.get("v3_folio_de_constancia_de_ins"));
});
pm.test("HORA INSCRIP Equal", () => {
    pm.expect(v2_hora_de_inscripci_n).to.be.eql(pm.variables.get("v3_hora_de_inscripci_n"));
});
pm.test("IDREPUVE Equal", () => {
    pm.expect(v2_idRepuve).to.be.eql(pm.variables.get("v3_idRepuve"));
});
pm.test("IDROBADO Equal", () => {
    pm.expect(v2_idRobado).to.be.eql(pm.variables.get("v3_idRobado"));
});
pm.test("IDOCRA Equal", () => {
    pm.expect(v2_idOcra).to.be.eql(pm.variables.get("v3_idOcra"));
});
pm.test("CODE Equal", () => {
    pm.expect(v2_code).to.be.eql(pm.variables.get("v3_code"));
});
