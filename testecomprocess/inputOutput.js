process.stdout.write('Digite um valor:  ')
process.stdin.on('data', function(data){
    process.stdout.write(`O valor passado foi:  ${data.toString()}    -  Cheers!`)
    process.exit()
})