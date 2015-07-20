# Второе задание по ШРИ -  api  
**Адрес для просмотра задания - [`http://dima716.github.io/api/`](http://dima716.github.io/api/)**  

Проблема неработы кода заключалась в том, что все коллбэки, которые передавались в функцию ```getData(request, callback)```, использовали одно и тоже
замыкание для поиска значения переменной ```request```.  

В конце цикла for переменная ```request``` имела значение ```/populations```.  
Именно это значение и использовалось при вызове всех трех коллбэков, что и привело к ошибке.

Для решения данной проблемы можно воспользоваться двумя способами:
  1. Создать обертку вокруг тела цикла в виде немедленно вызываемой функции с параметром ```request``` и передать в нее качестве аргумента переменyю
  ```request```. В данном случае для каждого из коллбэков будет создан дополнительный объект переменных LexicalScope, в котором будет храниться
  соответсвтующее значение переменной ```request``` и оно будет использовано при вызове соответствующего коллбэка.
  2. Можно использовать новые возможности ES2015, а именно инструкцию ```let```.  
  Если объявить ```let request = requests[i]``` c помощью данной инструкции, то переменная ```request``` будет  
  создаваться заново для каждой итерации цикла и таким образом каждый коллбэк при вызове будет использовать
  соответсвтующее значение переменной request.  


В исходных файлах привидены два способа решения этих проблем.  
Также в качестве альтернативы использования коллбэков, привиден способ решения задания с использованием Promises.



