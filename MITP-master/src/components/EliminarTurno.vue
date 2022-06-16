<template>
    <div id="contenedor">

		<form action="eliminar.php" method="POST" style="width:60%;margin:0 auto;">
			<div class="btn-flotante">
                <a href="" class="btn btn btn btn-info" role="button" aria-pressed="true"></a>
        </div>
			
		<div>
    		<h1 id="app" style="color: #4d78a8;">Baja de turno</h1>
		</div>

	<div>
			
			<input type="text" name="codigo" class="form-control form-control-lg" style="text-transform:uppercase;" placeholder="Ingrese su nº turno" autofocus><br><br>
			<input type="submit" class="btn btn-info form-control" value="Eliminar" name="eliminado">
	</div>

	<div>	
		<a href="" class="btn btn btn btn-info" role="button" aria-pressed="true" style="float: left;">Ver Turno</a>
		<a href="" class="btn btn btn btn-info" role="button" aria-pressed="true" style="float: right;">Registrar un turno</a>
	</div>
		
		</form>

	</div>
</template>