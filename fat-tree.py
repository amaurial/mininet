""" Create a fat tree topology with 32 hosts

"""

from mininet.topo import Topo

class FatTreeTopo (Topo):
     def __init__( self ):
          Topo.__init__(self)
          """ create hosts """          
          hosts=[]
          num_hosts=32
          num_aggswitch=8
          num_access_switch=8
          num_core_switch=4
          for i in range(0,num_hosts):
               hosts.append(self.addHost( 'h' + `i`))
          
          print 'hosts ', len(hosts) 
          """create access and aggregate switches"""
          s_access=[]
          s_agg=[]
          for i in range(0,num_aggswitch):
               if i < 10:
                    a='0' + `i`
               else:
                    a=`i`               
               dpid1="00000000001000%s" %a  
               s_access.append(self.addSwitch('s' + `i`,dpid=dpid1))
               
               dpid2="00000020000000%s" %a 
               s_agg.append(self.addSwitch('sa' + `i+100`,dpid=dpid2))
          
          """ create core switches"""
          s_core=[]
          for i in range(0,num_core_switch):
               dpid1="000000000030000%s" %i
               s_core.append(self.addSwitch('sc' + `i`,dpid=dpid1))
          
          
          """connect access to agg switches"""
          for i in range(0,num_access_switch):
               self.addLink(s_access[i],s_agg[i])
          
          print 'sizes:',len(s_access) , len(s_agg)
          i=0
          while i<7:
               print i
               self.addLink(s_access[i],s_agg[i+1])
               self.addLink(s_access[i+1],s_agg[i])
               i=i+2
            
          #""" connect agg to core switches """
          for i in range(0,num_aggswitch):
               r=i%2
               if r==0:
                    self.addLink(s_agg[i],s_core[0])
                    self.addLink(s_agg[i],s_core[1])
               else:
                    self.addLink(s_agg[i],s_core[2])
                    self.addLink(s_agg[i],s_core[3])
                    
          """ connect hosts to access switches """
          h=0
          for i in range(0,num_access_switch):
               for j in range(0,4):
                    self.addLink(hosts[h],s_access[i])
                    h=h+1
                         
               

topos={'fattree':(lambda: FatTreeTopo())}