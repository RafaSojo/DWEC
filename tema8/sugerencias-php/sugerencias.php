<?php
header('Access-Control-Allow-Origin: *');
$arrayAlumnos = array(
    array('nombre' => 'Rafael', 'apellidos' => 'Sojo Ruiz'),
    array('nombre' => 'Francisco', 'apellidos' => 'Ramirez Ruiz'),
    array('nombre' => 'Angelo', 'apellidos' => 'Barbara'),
    array('nombre' => 'Rafael', 'apellidos' => 'Garcia Zurita'),
    array('nombre' => 'Marcos', 'apellidos' => 'Gallardo'),
);

function getNombres($arrayAlumnos, $consulta)
{

    $arrayAlumnosResultado = array();
    foreach ($arrayAlumnos as $key => $alumno) {
        if (preg_match('/^' . $consulta . '/i', $alumno['nombre']) || preg_match('/^' . $consulta . '/i', $alumno['apellidos'])) {
            $arrayAlumnosResultado[] = $alumno;
        }
    }

    if (sizeof($arrayAlumnosResultado) == 0) {
        return 'No hay coincidencias';
    }

    $cadenaDevolver = '';
    foreach ($arrayAlumnosResultado as $key => $value) {
        $cadenaDevolver .= '<li><span>' . $value['nombre'] . ' ' . $value['apellidos'] . '</span></li>';
    }

    return $cadenaDevolver;
}

if (!isset($_POST['texto'])) {
    echo 'Falta un parámetro';
    exit();
}

echo getNombres($arrayAlumnos, $_POST['texto']);
