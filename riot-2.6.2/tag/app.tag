app
   h1 { opts.message }
   button(type="button" onclick="{ datetime }") get datetime
   div(each="{ items }")
      h3 { now }

      script.
         this.items = []

         datetime(event) {
           var date = new Date()
           this.items.push({ now: date })
         }
